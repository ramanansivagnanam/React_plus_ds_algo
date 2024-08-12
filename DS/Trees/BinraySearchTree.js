class Node {
    constructor(value) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(10);
        if(!this.root) {
            this.root = newNode;
            return this;
        } else {
            let currentNode = this.root;
            while(true) {
                if(value === currentNode.value) return undefined;
                if(value < currentNode.value) {
                    if(currentNode.left === null) {
                        currentNode.left = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else if( value > currentNode.value) {
                    if(currentNode.right === null) {
                        currentNode.right = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
            
        }

    }
    find(value) {
        
    }
}

const bs_tree = new BinarySearchTree();

