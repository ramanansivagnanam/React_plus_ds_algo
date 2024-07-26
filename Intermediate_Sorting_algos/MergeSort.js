function MergeSort(arr) {
    console.log(arr);
    const middle = Math.floor(arr.length/2);
    if(arr.length <= 1) return arr;
    let left = MergeSort(arr.slice(0, middle));
    let right = MergeSort(arr.slice(middle));
    return mergeTwoSortedArrays(left, right);
};


// console.log(MergeSort([8,3,5,9,4,7,6,1,2]));


function mergeTwoSortedArrays(array1, array2) {
    let resultArray = [];
    let i = 0; j = 0;
    while(i < array1.length && j < array2.length) {
       if(array1[i] < array2[j]) {
         resultArray.push(array1[i]);
         i++;
       } else {
            resultArray.push(array2[j]);
            j++;
       }
    }
    while( i < array1.length) {
        resultArray.push(array1[i]);
        i++;
    }
    while( j < array2.length) {
        resultArray.push(array2[j]);
        j++;
    }
    return resultArray;
}

console.log(MergeSort([8,3,5,9,4,7,6,1,2]));