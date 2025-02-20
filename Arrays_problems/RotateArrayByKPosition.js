function rotateArrayByKPosition(array, kPosition) {
    let tempArray = new Array(array.length);
    for(let index = 0; index < array.length; index++) {
        if(index + kPosition < array.length) {
            array[index] = array[index + kPosition];
        } 
    }
    console.log(tempArray);
    return array;
}
console.log(rotateArrayByKPosition([1, 2, 3, 4, 5], 2));
// [4, 5, 1, 2, 3]
// current position 0 + 2 -> 2 index + 2s
// current position 1 + 2 -> 3
// current position 2 + 2 -> 4
// current position 3 + 2 -> 5 -> 5 % (n + 1)
// current position 4 + 2 -> 6 -> 6 % (n + 1)
