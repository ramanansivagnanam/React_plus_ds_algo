function checkIfArrayIsSorted(array) {
    // 
    for(let i = 0; i < array.length - 1; i++) {
        if(!(array[i] < array[i + 1])) {
            return false;
        }
        return true;
    }
}

console.log(checkIfArrayIsSorted([1, 2, 3, 4, 5])); 
console.log(checkIfArrayIsSorted([5, 4, 3, 2, 1])); 