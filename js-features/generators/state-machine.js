function* bacnkAccount() {
    let balance = 0
    while (balance >= 0) {
        balance += yield balance
    }

    return "Bankrupt"
}

const account = bacnkAccount()
account.next()       // { value: 0, done: false }
account.next(10)     // { value: 10, done: false }
account.next(20)     // { value: 30, done: false }
account.next(30)     // { value: 60, done: false }
 

const getUsers = async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
  
    return json
  }
  
  // Call the getUsers function and log the response
  getUsers().then(response => console.log(response))