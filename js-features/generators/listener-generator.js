//Example2 :Listener
function* listener() {
    console.log("Listening...")
    while (true) {
        const message = yield
        console.log("Heard: ", message)
    }
}

const l = listener()

l.next("Hey")            // Listening...

l.next("How are you?")   // Heard:  Hey

l.next("Etc..")          // Heard:  How are you? 

 