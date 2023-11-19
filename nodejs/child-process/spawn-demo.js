const { spawn } = require('child_process')

const command = 'node'
const commandAttributes = ['-v']

// It is perfect for Large outputs because It works with Stream
const childProcess = spawn(command, commandAttributes)

childProcess.stdout.on('data', (data) => console.log(`stdout: ${data}`))

childProcess.stderr.on('data', (data) => console.log(`stderr: ${data}`))

childProcess.on('eror', (error) => console.log(`eror: ${error.message}`))

childProcess.on('exit', (code, signal) => {
    if (code) console.log(`Process Exit with code: ${code}`)

    if (signal) console.log(`Process KIlled with signal: ${signal}`)

    console.log(`DONE!`)
})