function swap(arr, index1, index2) {
    let temp = arr[index2];
    arr[index2] = arr[index1];
    arr[index1] = temp;

}
function BubbleSort(arr) {
    // Bubble sort implementaion
    let totalIteration = 0;
    let noSwapsHappened;
    for(let i = arr.length; i > 0; i--) {
        noSwapsHappened = true;
        for(let j = 0; j < i - 1; j++) {
            console.log('iteration on it');
            totalIteration++;
            console.log(arr[j] , arr[j+1]);
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                noSwapsHappened = false;
            }   
        }
        if(noSwapsHappened) {
            break;
        }
    }
    console.log('Total iteration', totalIteration);
    return arr;
};

// BubbleSort([12, 15, 7, 9, 9, 3, 2, 13]);
BubbleSort([12, 1, 2, 3, 4, 5, 6, 7, 8]);

// dry run
// 5 -> 5 > 3 ? 