export function riverSizes(matrix: number[][]) {
    // Write your code here.
    let sizes: number[] = [];
    let visitedArray: boolean[][] = matrix.map(row => row.map(value => false));

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (visitedArray[i][j]) {
                continue;
            }
            traverseNode(i, j, matrix, sizes, visitedArray);
        }
    }
    return sizes;;
}

function traverseNode(i: number, j: number, matrix: number[][],
    sizes: number[], visitedArray: boolean[][]) {
    let nodesToExplore = [[i, j]];
    let currentSize = 0;
    while (nodesToExplore.length > 0) {
        const curr = nodesToExplore.pop()!;
        i = curr[0];
        j = curr[1];
        if (visitedArray[i][j]) {
            continue;
        }
        visitedArray[i][j] = true;
        if (matrix[i][j] === 0) {
            continue;
        }
        currentSize++;
        const unVisitedNeighbours = getUnVisitedNeighbours(i, j, visitedArray, matrix);
       // console.log('Unvisted', unVisitedNeighbours)
        for (const neighbour of unVisitedNeighbours) {
           nodesToExplore.push(neighbour);
        }
    }
    if (currentSize > 0) {
        sizes.push(currentSize);
    }
}

function getUnVisitedNeighbours(i: number, j: number,
    visitedArray: boolean[][], matrix: number[][]) {
    const unVisitedNeighbours: [number, number][] = [];
    if (i > 0 && !visitedArray[i - 1][j]) {
        unVisitedNeighbours.push([i - 1, j]);
    }
    if (i < matrix.length - 1 && !visitedArray[i + 1][j]) {
        unVisitedNeighbours.push([i + 1, j]);
    }
    if (j > 0 && !visitedArray[i][j - 1]) {
        unVisitedNeighbours.push([i, j - 1]);
    }
    if (j < matrix[0].length - 1 && !visitedArray[i][j + 1]) {
        unVisitedNeighbours.push([i, j + 1]);
    }
    return unVisitedNeighbours;
}