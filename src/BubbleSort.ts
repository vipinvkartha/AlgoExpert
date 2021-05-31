export function bubbleSort(array: number[]) {
    // Write your code here.
    for (let idx = 0; idx < array.length; idx++) {
        for (let j = 0; j < array.length - idx - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}