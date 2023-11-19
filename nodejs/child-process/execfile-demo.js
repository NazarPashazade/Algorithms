const { execFile } = require('child_process')

const filePath = './commands.sh'

// It is perfect for Small outputs because It works with Buffers
execFile(filePath, (error, stdout, stdError) => {
    if (error) {
        console.log(`Error: ${error.message}`)
    }

    if (stdError) {
        console.log(`StdError: ${stdError}`)
    }

    console.log(`Result: ${stdout}`)     //  Result: v18.18.0
})
