function BinarySearch(sortedArr, ele) {
    // create a left pointer
    // create a right pointer
    // create middle pointer
    let start = 0;
    let end = sortedArr.length;
    let middle = Math.floor((start + end)/2);
    while(sortedArr[middle] !== ele && start < end) {
        if(ele < sortedArr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle =  Math.floor((start + end)/2);
    }
    if(sortedArr[middle] === ele) return ele;
    return -1;
}