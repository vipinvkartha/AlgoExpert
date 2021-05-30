export function sortedSquaredArray(array: number[]) {
    // Write your code here.
    return (array.map((num) => num * num).sort((a, b) => a - b));
}

export function sortedSquaredArrayOrderN(array: number[]) {
    // Write your code here.
    const sortedOut = new Array(array.length).fill(0);
    let idxSmall = 0;
    let idxLarge = array.length - 1;

    for (let idx = idxLarge; idx >= 0; idx--) {
        const valSmall = array[idxSmall];
        const valLarge = array[idxLarge];
        if (Math.abs(valSmall) > Math.abs(valLarge)) {
            sortedOut[idx] = valSmall * valSmall;
            idxSmall++;
        } else {
            sortedOut[idx] = valLarge * valLarge;
            idxLarge--;
        }
    }
    return sortedOut;
}
