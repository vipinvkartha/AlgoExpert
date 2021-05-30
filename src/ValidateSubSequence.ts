export function isValidSubsequence(array: number[], sequence: number[]) {
    // Write your code here.
    let i = 0;
    for (const num of array) {
        const temp = sequence[i];
        if (num === temp) {
            i++;
        }
    }
    if (i === sequence.length) {
        return true;
    } else {
        return false;
    }
}