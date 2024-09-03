class UnDirGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
}