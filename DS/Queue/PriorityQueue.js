
class MinBinaryHeap {
    constructor() {
        this.values = [];
    }
    enQueue(value, priority) {
        const newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUpIfNeeded();
    }

    bubbleUpIfNeeded() {
        let index = this.values.length - 1;
        while( index > 0) {
            let parentIndex = Math.floor(this.values.length - 1/2);
            let element = this.values[index];
            if(element.priority > this.values[parentIndex].priority) break;
                // swap two values
                this.values[parentIndex] = element;
                this.values[index] = this.values[parentIndex];
                index = parentIndex;
        }
    }

    Dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length){
            this.values[0] = end;
        }
        this.slinkDown();
        return min;
        
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
                if(leftChild.priority < element.priority) {
                    swapIndex = leftIndex;
                }
            }
            if(rightIndex < length) {
                rightChild = this.values[rightIndex];
                if((swapIndex === null && rightChild.priority < element.priority )||( !swapIndex && rightChild.priority < leftChild.priority )) {
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

const b_heap = new MinBinaryHeap();
b_heap.enQueue("Common cold", 1);
b_heap.enQueue("Common cold", 1);
b_heap.enQueue("High fever", 2);
b_heap.enQueue("Gun shot wound", 5);
b_heap.Dequeue()


class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

// [41, 29, 33, 18, 15, 27, 30]

        //        41
        //    29     33 
        // 18   15  27  30

        // insert 50

        // [41, 29, 33, 18, 15, 27, 30, 50]


