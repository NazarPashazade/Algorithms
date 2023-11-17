// Example: Iterate Array
function* generateArray(array) {
    for (let i = 0; i < array.length; i++) {
        yield array[i];
    }
}

const generator2 = generateArray([11, 22, 33])


generator2.next()     //  { value: 11, done: false }
generator2.next()     //  { value: 22, done: false }
generator2.next()     //  { value: 33, done: false }
generator2.next()     //  { value: undefined, done: true }

if (generator2.next().done) {
    generator2.return("COMPLETED")    //  { value: COMPLETED, done: true }
}

