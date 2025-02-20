function findMaxMin(array) {
  if(!array.length) return [];
  let MIN_VALUE = array[0];
  let MAX_VALUE = array[0];
  for (let val of array) {
    if(val < MIN_VALUE ) {
        MIN_VALUE = val;
    }
    if(val > MAX_VALUE) {
        MAX_VALUE = val;
    }
  }

  return [MAX_VALUE, MIN_VALUE];
    
}

console.log(findMaxMin([])); // []


console.log(findMaxMin([5, 2, 12, 8, 3])); // [12, 2]
// 123
// 543

// function findMinMaxOther(array) {
//     if(!array.length) return [];
//     let MIN_VALUE = array[0];
//     let MAX_VALUE = array[0];
//     var i = 0,j = array.length;

//     while(i !== j){
//          if(array[i] < MIN_VALUE) {
//             MIN_VALUE = array[i];
//          }
//          if(array[j] < MIN_VALUE) {
//             MIN_VALUE = array[j];
//          }
//          if(array[i] > MAX_VALUE) {
//             MIN_VALUE = array[i];
//          }
//          if(array[j] > MAX_VALUE) {s
//             MIN_VALUE = array[j];
//          }
//          i++;
//          j--;
//     }
//     console.log(MIN_VALUE, MAX_VALUE);
// }

// findMinMaxOther([5, 2, 8, 12, 3]);

//  Buit in approach

function maxMinBuiltInApproach(arr) {
    return [Math.max(...arr), Math.min(...arr)];
}

console.log(maxMinBuiltInApproach([5, 2, 12, 8, 3]));