

const unsortedArray = [-3, 8, 6, -5, 7, 15, 6, 13]

// QuickSort Time Complexity: T = O(N^2).

const quickSort = (arr) => {
    if (arr.length <= 1) return arr;

    let pivot = arr[0]; 
    let leftArr = [];
    let rightArr = [];

    arr.forEach((item, i) => {
        // it is just to skip first iteration: i > 0
        if (i) {
            item < pivot ? leftArr.push(item) : rightArr.push(item)
        }
    });

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

quickSort(unsortedArray)  // [-5, -3, 6, 6, 7, 8, 13, 15]
