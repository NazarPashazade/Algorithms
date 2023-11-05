const sortedArray = [15, 55, 57, 69, 74, 95, 98, 99]
const target = 98;

// T= O(logN)

const binsarySearch = (arr, target) => {
    let leftIndex = 0
    let rightIndex = arr.length - 1
    let middleIndex = Math.round((leftIndex + rightIndex) / 2)
    let isTargetFound = false

    if (!(arr[leftIndex] <= target && arr[rightIndex] >= target)) {
        console.log(`Target is not in this array`)
        return
    }

    while (!isTargetFound) {
        if (arr[middleIndex] < target) {
            middleIndex = Math.round((middleIndex + rightIndex) / 2)
        } if (arr[middleIndex] > target) {
            middleIndex = Math.floor((leftIndex + middleIndex) / 2)
        } else if (target === arr[middleIndex]) {
            isTargetFound = true
        }
    }


    if (isTargetFound) {
        console.log(`Target is found`)
    }
}

binsarySearch(sortedArray, target)