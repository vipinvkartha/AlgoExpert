export function moveElementToEnd(array: number[], toMove: number) {
    // Write your code here.
    let left = 0;
    let right = array.length - 1;
    while(left < right) {
        while(left < right && array[right] === toMove) {
            right--;
        }
        if(array[left] === toMove) {
            swap(left,right,array);
        }
        left++;
    }
    return array;
  }

  function swap(i: number, j: number, array: number[]) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }