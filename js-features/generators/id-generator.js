// Example1: Generating Unique Identifiers
function* generateId() {
    let id = 1
    while (true) {
        yield id++
    }
}

// const generator = generateId()

generator.next()     // { value: 1, done: false }
generator.next()     // { value: 2, done: false }
generator.next()     // { value: 3, done: false }
// // etc ...
