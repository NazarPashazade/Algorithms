
// ----- Top Level await -----
const resp = await fetch('https://jsonplaceholder.typicode.com/users');
await resp.json()


// ----- array.at() -----
const arr = ["A", "B", "C", "D"]
arr.at(3)   // "D"  same as arr[3]
arr.at(-1)  // "D"  only difference is that we can use negativ index as well


// ----- Object.hasOwn() -----
const obj = { a: 111 }

obj.hasOwnProperty('a')              //true
Object.hasOwn(obj, 'a')              //true

obj.hasOwnProperty('toString')       //false
Object.hasOwn(obj, 'toString')       //false

obj.hasOwnProperty = () => true      // Diffence is that It is easy to mock this method

obj.hasOwnProperty('toString')       //true 
Object.hasOwn(obj, 'toString')       //false



