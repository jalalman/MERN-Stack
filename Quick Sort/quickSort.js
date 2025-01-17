function quickSort(arr) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose the pivot (using the middle element)
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const equal = [];

    // Partition the array into three parts
    for (let element of arr) {
        if (element < pivot) {
            left.push(element);
        } else if (element > pivot) {
            right.push(element);
        } else {
            equal.push(element);
        }
    }

    // Recursively sort the left and right subarrays
    // and combine them with the equal elements
    return [...quickSort(left), ...equal, ...quickSort(right)];
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", unsortedArray);
console.log("Sorted array:", quickSort(unsortedArray));