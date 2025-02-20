function findFirstDuplicate(array) {
    let seen = new Set();
    for(const val of array) {
        if(seen.has(val)) {
            return val;
        } else {
            seen.add(val);
        }
    }
}


console.log(findFirstDuplicate([2, 3, 5, 2, 4, 5, 6])); // 2