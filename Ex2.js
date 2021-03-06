const R = require('ramda');

const isEven = number => {
    const n = R.clone(number);
    n.even = n.value % 2 == 0;
    return n;
}

const positive = number => {
    const n = R.clone(number);
    n.positive = n.value > 0;
    return n;
}

const isOdd = number => {
    const n = R.clone(number);
    n.odd = n.value % 2 == 1;
    return n;
}

const negative = number => {
    const n = R.clone(number);
    n.negative = n.value < 0;
    return n;
}

const isZero = number => {
    const n = R.clone(number);
    n.zero = n.value == 0;
    return n;
}

const isPrime = number => {
    const n = R.clone(number);
    n.prime = n.value % 1 == 0;
    return n;    
}

const mapToNumberObject = number => {
    const obj = {};
    obj.numero = number;
    return obj;
}

const arr = [-1, 50, 5, 10, -8, 20, 25, 0, 100, 14, -123];

// ExercÃ­cio 1: use map() para transformar 'arr' em objetos usando mapToNumberObject()

const NumbertoObject = arr.map(mapToNumberObject);
//console.log(NumbertoObject);

// ExercÃ­cio 2: seguindo o modelo das 2 primeiras funÃ§Ãµes implemente as outras 4 funÃ§Ãµes

// ExercÃ­cio 3: refatore todas as funÃ§Ãµes para a forma usando arrow function (=>)

// ExercÃ­cio 4: use R.pipe para compor as funÃ§Ãµes: isEven, positive, isOdd, negative, 
    // isZero, e isPrime. Teste a funÃ§Ã£o composta com um Ãºnico objeto.
    
    let numero = 20;
    const arr2 = [20];

    const allfunctioninone = R.pipe(
        isEven,
        positive,
        isOdd,
        negative,
        isZero,
        isPrime
    )
    //Não entendi pq com um arr ele funciona e sem não
    console.log(allfunctioninone(numero));
    console.log(allfunctioninone(20));
    console.log(allfunctioninone(arr2));
    
// ExercÃ­cio 5: use a funÃ§Ã£o composta do Ex. 4 para transformar os nÃºmeros em 'arr'