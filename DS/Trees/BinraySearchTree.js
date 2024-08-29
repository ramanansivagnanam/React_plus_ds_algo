class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value === currentNode.value) return undefined;
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (value > currentNode.value) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }
  find(node = this.root, value) {
    if (!node) return false;
    if (node.value === value) return true;
    if (value < node.value) {
      return this.find(node.left, value);
    } else if (value > node.value) {
      return this.find(node.right, value);
    }
  }

  BFS() {
    let node = this.root;
    const queue = []; // FIFO
    const visited = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      visited.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }
  // Root left right
  DFSPreOrder() {
    const node = this.root;
    let data = [];
    function recursive(node) {
      data.push(node.value);
      if (node.left) recursive(node.left);
      if (node.right) recursive(node.right);
    }
    recursive(node);
    return data;
  }
  // Left, right, root
  DFSPostOrder() {
    const node = this.root;
    let data = [];
    function recursive(node) {
      if (node.left) recursive(node.left);
      if (node.right) recursive(node.right);
      data.push(node.value);
    }
    recursive(node);
    return data;
  }
//   left root right
  DFSInOrder() {
    const node = this.root;
    let data = [];
    function recursive(node) {
      if (node.left) recursive(node.left);
      data.push(node.value);
      if (node.right) recursive(node.right);
    }
    recursive(node);
    return data;
  }
}


//          100
//     90          102
//  85   95     101   117

const bs_tree = new BinarySearchTree();
console.log("bs_tree.....");
bs_tree.insert(100);
bs_tree.insert(102);
bs_tree.insert(90);
bs_tree.insert(117);
bs_tree.insert(101);
bs_tree.insert(95);
bs_tree.insert(85);
console.log("bs_tree.....find");
const valueFound = bs_tree.find(bs_tree.root, 115);
console.log("valueFound", valueFound);

console.log(bs_tree.BFS());
console.log(bs_tree.DFSPreOrder());
console.log(bs_tree.DFSPostOrder());

// Tree traversal
