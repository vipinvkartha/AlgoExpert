export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
    // Write your code here.
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);
    let idx1 = 0;
    let idx2 = 0;
    let smallestDiff = Infinity;
    let current = Infinity;
    let smallestPair: number[] = [];
    while ((idx1 < arrayOne.length) && (idx2 < arrayTwo.length)) {
        let diff = arrayOne[idx1] - arrayTwo[idx2];
        let firstNum = arrayOne[idx1];
        let secondNum = arrayTwo[idx2];
        if (firstNum < secondNum) {
            idx1++;
            current = secondNum - firstNum;
        } else if (firstNum > secondNum) {
            idx2++;
            current = firstNum - secondNum;
        } else {
            return [firstNum, secondNum];
        }
        if (smallestDiff > current) {
            smallestDiff = current;
            smallestPair = [firstNum, secondNum];
        }
    }
    return smallestPair;
}
