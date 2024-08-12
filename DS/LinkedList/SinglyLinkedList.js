class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);
        if(this.head === null) {
            this.head = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.tail = node;
        this.length++;
        return this;
    }
    pop() {
        if(!this.head){
            return undefined;
        }
        let current = this.head;
        let previous = this.head;
        while(current.next !== null) {
            previous = current;
            current = current.next;
        }
        this.tail = previous;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        // remove node from the begining
        if(!this.head) return undefined;
        let removedNode = this.head;
        this.head = removedNode.next;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return removedNode;
    }
    unShift(value) {
        // add the new node at the list begining
       const newNode = new Node(value);
       if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
       } else {
        newNode.next = this.head;
        this.head = newNode;
       }
       this.length++;
       return this;
    }
    traverse() {
        if(!this.head) return undefined;
        console.log("Traversing through the list");
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }
    delete() {
        // deletes the node
    }
    get(index) {
        if(index < 0 || index >= this.length) {
            return null;
        }
        let iterator = 0;
        let currentNode = this.head;
        while(iterator !== index && currentNode.next !== null) {
            currentNode = currentNode.next;
            iterator++;
        } 
        return currentNode;
    }
    set(index, value) {
        const node = this.get(index);
        if(node) {
            node.value = value;
            return true;
        }
        return false;
    }
    print() {
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr);
    }

    reverse() {
        //  Prepare this for interview 
        let prev = this.head;
        this.head = this.tail;
        this.tail = prev;

        return this;

        // 1 -> 2 -> 3-> 4 -> 5
        
    }

}

const s_list = new SinglyLinkedList();

s_list.push(1);
s_list.push(2);
s_list.push(3);

// s_list.shift()
s_list.unShift(5);
s_list.unShift(6);

s_list.get(3)
s_list.print();
s_list.reverse();
// s_list.traverse();
// console.log(s_list);