const R = require('ramda');

const contentOfTag = R.curry(
    (xmlNode, tagName) => xmlNode.getElementsByTagName(tagName)[0].textContent
);

const contentOfSource = contentOfTag(R.__, 'source');
const contentOfAdded = contentOfTag(R.__, 'added');
const contentOfUpdated = contentOfTag(R.__, 'lastupdated');
const contentOfID = contentOfTag(R.__, 'id');
const getGitHubProject = xmlNode => contentOfSource(xmlNode).replace('https://github.com/', '');

const getGitHubProject2 = xmlNode => {
    const project = contentOfSource(xmlNode).replace('https://github.com/', '');
    const addedDate = contentOfAdded(xmlNode);
    const updatedDate = contentOfUpdated(xmlNode);
    return '${project}, ${addedDate}, ${updatedDate}';
}
const elementsToArray = nodes => {
    const arr = [];
    for (let i = 0; i < nodes.length; i++)
        arr.push(nodes[i]);
    return arr;
};

const isValid = R.curry(
    (app, addedAfterYear, updatedAfterYear) => {
        if (!contentOfSource(app).includes('github.com'))
            return false;

        const addedDate = new Date(contentOfAdded(app));
        if (addedDate.getFullYear() < addedAfterYear)
            return false;

        const lastUpdatedDate = new Date(contentOfUpdated(app));
        if (lastUpdatedDate.getFullYear() < updatedAfterYear)
            return false;

        return true;
    }
);

module.exports = {
    isValid,
    elementsToArray,
    getGitHubProject,
    getGitHubProject2,
    contentOfSource,
    contentOfID,
};