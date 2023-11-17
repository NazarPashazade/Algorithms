// Boolean(1)       // true  Explicit
// !!2              // false Implicit


// String(123)     // 123 Explicit
// 123 + ''        // 123 Implicit

// NaN does not equal to anything even itself:
NaN === NaN      // False
NaN == NaN       // False
NaN == false     // False


!!"false" == !!"true"   // True==True  -->  True

console.log(!!"false")
 
