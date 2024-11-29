function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const generator1 = generator();
console.log(generator1.next().value);
console.log(generator1.next().value);
console.log(generator1.next().value);

// if we should NOT use generator written before
function createGenerator() {
    let count = 1;
    return function () {
        if (count <= 3) {
            return count++;
        } else {
            return undefined;
        }
    };
}

// if we should use generator written before
function createGenerator2() {
    let count = 0;
    return function () {
        if (count <= 3) {
            return generator1.next().value
        } else {
            return undefined;
        }
    };
}

const generator2 = createGenerator();
console.log(generator2()); // 1
console.log(generator2()); // 2
console.log(generator2()); // 3
console.log(generator2()); // undefined
