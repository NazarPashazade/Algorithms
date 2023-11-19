process.on('message', message => {
    if (message == "calculateSum") {
        const total = sum()
        process.send(total)
    }
})

const sum = () => {
    let sum = 0
    for (let i = 0; i < 100000000; i++) {
        sum += i;
    }
    return sum
}

