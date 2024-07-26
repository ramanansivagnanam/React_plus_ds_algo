function LinearSearch(numArray, searchValue) {
  if(numArray.length === 0) return -1;
  // [10, 15, 20, 25, 30], 15 // 1
  for(let i = 0; i < numArray.length; i++) {
    if(numArray[i] === searchValue) return i;
  }
  return -1;
}


console.log(LinearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10))