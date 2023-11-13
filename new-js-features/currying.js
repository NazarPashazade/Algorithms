
// Example 1
const sum = (a, b, c) => a + b + c              // sum(3, 4, 5)         // 12
const sumCurry = a => b => c => a + b + c       // sumCurry(3)(4)(5)    // 12



// Example 2
const getCarDetail = (model, property) => {       
    //...
}

getCarDetail("BMW", 'year')
getCarDetail("BMW", 'millage')


const getCarDetailCurry = (model) => {        
    return (property) => {
        //...
    }
}

const getBMWProperty = getCarDetailCurry('BMW')
getBMWProperty('year')
getBMWProperty('millage')

