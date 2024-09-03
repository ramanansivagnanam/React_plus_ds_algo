
class MaxBinaryHeap {
    constructor() {
        this.values = [41, 29, 33, 18, 15, 27, 30];
    }
    insertAtHeap(value) {
        this.values.push(value);
        this.bubbleUpIfNeeded();
    }

    bubbleUpIfNeeded() {
        let index = this.values.length - 1;
        while( index > 0) {
            let parentIndex = Math.floor(this.values.length - 1/2);
            let element = this.values[index];
            if(element < this.values[parentIndex]) break;
            this.values[parentIndex] > this.values[index]
                // swap two values
                this.values[parentIndex] = element;
                this.values[index] = this.values[parentIndex];
                index = parentIndex;
        }
    }

    extractFromMaxBHeap() {
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length){
            this.values[0] = end;
        }
        this.slinkDown();
        return max;
        
    }
    slinkDown() {
        // get the left and right indexs and children
        let index = 0;
        let element = this.values[index];
        const length = this.values.length;
        while(true) {
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swapIndex = null;
            if(leftIndex < length) {
                leftChild = this.values[leftIndex];
                if(leftChild > element) {
                    swapIndex = leftIndex;
                }
            }
            if(rightIndex < length) {
                rightChild = this.values[rightIndex];
                if((swapIndex === null && rightChild > element )||( !swapIndex && rightChild > leftChild )) {
                    swapIndex = rightIndex;
                }
            }
            if(!swapIndex) break;
            this.values[index] = this.values[swapIndex];
            this.values[swapIndex] = element;
            index = swapIndex;
        }
    }
}

const b_heap = new MaxBinaryHeap();
b_heap.insertAtHeap(55)


// [41, 29, 33, 18, 15, 27, 30]

        //        41
        //    29     33 
        // 18   15  27  30

        // insert 50

        // [41, 29, 33, 18, 15, 27, 30, 50]