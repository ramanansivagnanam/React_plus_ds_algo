class UnDirGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
}

const graph = new UnDirGraph();
graph.addVertex("Theni");
graph.addVertex("Seepalakottai");
