const { exec } = require('child_process')

const command = 'node -v'

// It is perfect for Small outputs because It works with Buffers

exec(command, (error, stdout, stdError) => {
    if (error) {
        console.log(`Error: ${error.message}`)
    }

    if (stdError) {
        console.log(`StdError: ${stdError}`)
    }

    console.log(`Result: ${stdout}`)     //  Result: v18.18.0
})
