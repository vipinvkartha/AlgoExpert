export function threeNumberSort(array: number[], order: number[]) {
    // Write your code here.
    const count = [0,0,0];
    for (const num of array) {
      const idx = order.indexOf(num);
      count[idx]++;
    }
    let i = 0;
    for (let idx = 0; idx < 3; idx++) {
      const val = order[idx];
      const cuur = count[idx];
      for (let j = 0; j < cuur; j++) {
        array[i] = val;
        i++;
      }
    }
    return array;
  }
  