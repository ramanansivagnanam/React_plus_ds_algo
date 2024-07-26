function swap(arr, index1, index2) {
    let temp = arr[index2];
    arr[index2] = arr[index1];
    arr[index1] = temp;

}
function SelectionSort(arr) {
    // 5, 3, 4, 1, 2
    let totalIterations = 0;
    for(let i = 0; i < arr.length; i++) {
        let minmum = arr[i];
        let minimumIndex = i;
        for(let j = i + 1; j < arr.length; j++) {
            totalIterations++;
            if(arr[j] < minmum ) {
                minmum = arr[j];
                minimumIndex = j;
            }
        }
        swap(arr, i, minimumIndex )
    }
    console.log('Number of total iterations', totalIterations)
    return arr;

}

console.log(SelectionSort([34,22,10, 19, 17, 19, 17]));

SelectionSort([12, 1, 2, 3, 4, 5, 6,7, 8, 9, 10])
// dry run 

// [5, 3, 4, 1, 2]  5 -> (  3 < 5 ) 3 -> ( 4 < 3 ) 1 -> ( 1 < 3)  1 -> ( 2 <  1)  swap()

// [1, 3, 4, 5, 2]  3 -> process goes 