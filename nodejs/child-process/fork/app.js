const { fork } = require('child_process')

const express = require('express')

const app = express()
const port = 3000

//RUN THIS COMMAND : loadtest -n 10  -c 10   http://localhost:3000/fork

app.get('/sync', (req, res) => {
    const total = sum()
    res.send({ total })
})

app.get('/async', async (req, res) => {
    const total = sumPromise()
    res.send({ total })
})

app.get('/fork', (req, res) => {
    const childProcess = fork('./sum-fork')

    childProcess.send('calculateSum')

    childProcess.on('message', total => res.send({ total }))
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const sum = () => {
    let sum = 0
    for (let i = 0; i < 100000000; i++) {
        sum += i;
    }
    return sum
}


const sumPromise = () => {
    return new Promise(resolve => {
        let sum = 0
        for (let i = 0; i < 100000000; i++) {
            sum += i;
        }
        resolve(sum)
    })
}