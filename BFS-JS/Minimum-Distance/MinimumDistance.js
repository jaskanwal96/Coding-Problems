class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        if (this.items.length > 0) {
            this.items.shift();
        } else {
            throw new Error('Stack Underflow');
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }
}
function findMinimumDistance(lot) {
    let visited = [];
    //Initiating the visiting matrix
    for (let index = 0; index < lot.length; index++) {
         visited[index] = [];
    }
    // Running BFS from the source i.e first element of the matrix
    return bfs(lot, 0, 0, visited);
}

function bfs(mat, i, j, visited) {
    const row = [-1, 0, 0, 1 ];
    const col = [ 0, -1, 1, 0 ];
    // Visiting the source node
    visited[i][j] = true;
    const q = new Queue();
    // Initialising distance 0 for the bot
    q.enqueue([i, j, 0]);
    while(!q.isEmpty) {
        const temp = q.dequeue();
        const i = temp[0];
        const j = temp[1];
        const distance = temp[2];
        // If the blockage is enountered, return the distance
        if (mat[i][j] === 9) {
            return distance;
        }
        for (let index = 0; index < row.length; index++) {
            if(isSafe(mat, i + row[index], j + col[index], visited)) {
                q.enqueue([i + row[index], j + col[index], distance + 1]);
            }
        }
    }
    // If the blockage is not encountered, then there is no way to reach the blockage
    return -1;
}


function isSafe(mat, i, j, visited) {
    return i >= 0 && i < mat.length && j >= 0 && j < mat[0].length 
    && mat[i][j] && !visited[i][j];
}


const question = [
    [1, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 1, 0],
    [1, 0, 0, 0, 1, 1, 0],
    [1, 0, 1, 1, 1, 1, 0],
    [1, 1, 1, 0, 0, 1, 0],
    [1, 1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 9],
];

console.log(findMinimumDistance(question));