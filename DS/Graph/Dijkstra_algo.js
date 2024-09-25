class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight: weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight: weight });
    }
}


const w_graph = new WeightedGraph();

w_graph.addVertex("A");
w_graph.addVertex("B");
w_graph.addVertex("C");
w_graph.addVertex("D");
w_graph.addVertex("E");

w_graph.addEdge("A", "B", 9);
w_graph.addEdge("A", "C", 10);
w_graph.addEdge("B", "D", 7);

console.log(w_graph);