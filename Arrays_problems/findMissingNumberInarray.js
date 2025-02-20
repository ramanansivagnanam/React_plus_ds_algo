function findMissingNumberInarray(array) {
  // questions to the interviewer
  // [1, 2, 4, 5]
  // Array is sorted [1, 2, 4, 5, 9, 11] Multiple missing numbers
  // what if array is not sorted // [1, 5, 2, 8, 10, 11] Multiple missing numbers
  //
  // const maxNumber = Math.max(...array);
  // const minNumber = Math.min(...array);
  // return [minNumber, maxNumber];
  // if array is sorted
  for (let i = 1; i < array.length; i++) {
    if (array[i] - array[i - 1] !== 1) {
      return array[i - 1] + 1;
    }
  }
}
function findMissingMultipleNumbersInarray(array) {
  // questions to the interviewer
  // if array is sorted
  //   [10, 11, 11,  12, 17, 18, 20]
  let missingNumbers = [];
  for (let i = 1; i < array.length; i++) {
    let diffrence = array[i] - array[i - 1];
    let lastPushed = array[i - 1] + 1;
    while ( diffrence > 1 && 0 < diffrence - 1 ) {
      missingNumbers.push(lastPushed);
      diffrence--;
      lastPushed++;
    }
  }

  return missingNumbers;
}
// i   i - 1
// 12 , 10 -> diff 2




// console.log(findMissingMultipleNumbersInarray([10, 11, 11,  12, 20]));


function findMissingIntegerInUnsortedArray(array) {
   let minValue = Math.min(...array);
   const maxValue = Math.max(...array);
   const setCollection = new Set([...array]);
   const missingElements = [];
   const createdArray = Array.from({ length: maxValue - minValue + 1 }, (_, i) => i + minValue);
   console.log(createdArray);
   while(minValue < maxValue) {
        if(!setCollection.has(minValue)){
            missingElements.push(minValue);
        }
        minValue++;
   }
   return missingElements;
}

console.log(findMissingIntegerInUnsortedArray([20, 10, 15, 18, 12, 17]));

 // 20 - 10 = 10 + 1 = 11;
 // 

// Input: [20, 10, 15, 18, 12, 17]
// Output: [11, 13, 14, 16, 19]