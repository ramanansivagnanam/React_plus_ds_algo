function NaiveStringSearch(longStr, shortStr) {
    // "oh god beautiful! oh god beautiful", "god"
    let count = 0;
    for(let i = 0; i < longStr.length; i++) {
        for(let j = 0; j < shortStr.length; j++) {
            if(longStr[i] !== shortStr[j]) {
                break;
            }
            if(j === shortStr.length - 1) count++
        }
    }
    return count;
}