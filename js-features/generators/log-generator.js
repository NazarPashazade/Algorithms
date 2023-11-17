
//Example3
function* generateLog() {
    console.log("Running...")
    yield "PAUSED"
    console.log("Running Again...")
    return "STOPPED"
}



const generator3 = generateLog()

generator3.next()
generator3.next()

/*  Output:
Running...
{ value: 'PAUSED', done: false }
Running Again...
{ value: 'STOPPED', done: true }
*/

