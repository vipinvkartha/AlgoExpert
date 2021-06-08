export function selectionSort(array: number[]) {
    // Write your code here.
    let idx = 0;
    while(idx < array.length - 1) {
        let smallIdx = 0;
        for (let i = idx + 1; i < array.length; i++) {
            if (array[i] < array[smallIdx]) {
                smallIdx = i;
            }
        }
        swap(smallIdx, idx, array);
        idx++;
    }
    return array;
  }
  function swap (idx1: number, idx2: number, array: number[]) {
      let temp = array[idx1];
      array[idx1] = array[idx2];
      array[idx2] = temp;
  }