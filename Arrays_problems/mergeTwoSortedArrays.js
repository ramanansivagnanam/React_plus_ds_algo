function mergeTwoSortedArrays(array1, array2) {
    return array1.concat(array2).sort((a ,b) =>  a - b);
}

// console.log(mergeTwoSortedArrays([1, 3, 5], [2, 4, 6])); 


function mergeTwoSortedArraysRecursively(array1, array2) {
    if(array1.length === 0) return array2;
    if(array2.length === 0) return array1;
    if(array1[0] < array2[0]){
        return [array1[0]].concat(mergeTwoSortedArraysRecursively(array1.slice(1), array2)); 
    }
    if(array2[0] < array1[0]) {
        return [array2[0]].concat(mergeTwoSortedArraysRecursively(array1, array2.slice(1)));
    }
}

console.log(mergeTwoSortedArraysRecursively([1, 3, 5, 8], [2, 4, 6, 7, 9, 10])); 


function mergeSortedArraysUsingTwoPointers(array1, array2) {
  let result = [];
  let i = 0, j = 0;
  while(i < array1.length && j < array2.length) {
    if(array1[i] < array2[j]) {
        result.push(array1[i]);
        i++;
    } else {
        result.push(array2[j]);
        j++;
    }
  }
  return result;
}

// console.log(mergeSortedArraysUsingTwoPointers([1, 3, 5], [2, 4, 6])); 
