
/**
 * 
 * @returns map
 */
const Graph =
    function () {
        return function () {
            return new Map();
        }
    };

/**
 * 
 * @param arr 
 * @param Graph 
 * @returns arr of unique vertices
 * @description This function extracts the each vertices from the input array and added to a set for avoiding
 * the duplication  
 */
const getKeys = (arr: any) => {
    const set = new Set();
    for (const list of arr) {
        for (let j = 0; j < list.length; j++) {
            set.add(list[j]);
        }
    }
    return [...set];
}

/**
 * 
 * @param vertex_arr 
 * @param Graph 
 * @returns This function returns a null graph
 * @description Here vertex_arr is a collection of unique vertices of the graph. 
 * We assign those vertices as key and assign a empty array as value for later processing
 */
const buildNullGraph = (vertex_arr: any, Graph: any) => {
    for (let i = 0; i < vertex_arr.length; i++) {
        Graph.set(vertex_arr[i], []);
    }
    return Graph;
}

/**
 * 
 * @param subList 
 * @param Graph 
 * @returns Graph
 * @description This function creates the edges between given vetrices provided in subList params
 */
const addAdjacencyNodeHelper = (subList: any, Graph: any) => {
    Graph.get(subList[0]).push(subList[1]);
    Graph.get(subList[1]).push(subList[0]);
    return Graph;
}

/**
 * 
 * @param arr 
 * @param Graph 
 * @returns Graph
 * @description This function is used to feed the  addAdjacencyNodeHelper with a sublists from the array
 */
const addTheAdjacenyNode = (arr: any, Graph: any) => {
    let result: any;
    for (const list of arr) {
        result = addAdjacencyNodeHelper(list, Graph)
    }
    return result;
}

/**
 * 
 * @param arr 
 * @param Graph 
 * @returns Graph
 * @description This function returns the final graph
 */
const buildGraph = (arr: any, Graph: any) => {
    console.log(`Processing the input...`);
    console.log(`Extracting the unique vertexes...`)
    const unique_vertexs = getKeys(arr);
    console.log(`Graph vertexs extraction completed.`)
    console.log(`Building the null graph...`)
    const null_graph = buildNullGraph(unique_vertexs, Graph)
    console.log(`Null graph build completed.`)
    console.log(`Connecting the edges...`)
    const adjacency_list = addTheAdjacenyNode(arr, null_graph);
    console.log(`Connecting the edges completed.`)
    return adjacency_list;
};



let temp: any;
/**
 * 
 * @param visited 
 * @param graph 
 * @param root 
 * @param destination 
 * @returns boolean
 * @description This function return the result if the path exists else false.
 * The process is carried out by doing a Depth First search. When the current node value(root) and
 * desitination matches it returns true
 */
const dft = (visited: Set<number>, graph: any, root: number, destination: number): any => {
    if (root === destination) {
        return true;
    }
    else if (!visited.has(root)) {
        visited.add(root)

        for (let vertex of graph.get(root)) {
            temp = dft(visited, graph, vertex, destination);
        };
        return temp;
    };
    if (temp) {
        return temp
    } else {
        return false
    }
};



// const input = [[0, 1], [1, 2], [2, 0]];
// const input = [[0,4]]
// const input = [[0, 1], [1, 2], [2, 0]];
const input = [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]];
const graph = buildGraph(input, Graph()());
console.log(graph)
const visited = new Set<number>();
const root = 0
const destination = 5;
const result = dft(visited, graph, root, destination);
console.log(result);

export { };

/**
 * Time Complexity 
 *  function getKeys = O(n*m) => O(n^2)
 *  function buildNullGraph = O(n)
 *  fucntion addAdjacencyNodeHelper = O(1)
 *  function addTheAdjacenyNode  = O(n)
 *  function dfs = O(n)
 * 
 * Total time complexity = O(n^2);
 * Total Space Complexity  = O(n)
 *  
 * 
 */