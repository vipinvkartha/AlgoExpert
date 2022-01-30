export function powerset(array: number[]) {
    // Write your code here.
    const result: number[][] = [[]];
    for (const elem of array) {
        const len = result.length;
        for (let i = 0; i < len; i++) {
            result.push(result[i].concat(elem));
        }
    }
    return result;
  }