export function longestPeak(array: number[]) {
    let max = -1;
    let count = 0;
    let isDown = false;
    for (let i = 1; i < array.length; i++) {
        if ((array[i] > array[i-1]) && !isDown) {
            count++;
        } else if((array[i] > array[i-1]) && isDown) {
            if ((count > max)) {
                max = count;
            }
            count = 1;
            isDown = false;
        }
        else if((array[i] < array[i-1]) && (count >= 1)) {
            isDown = true;
            count++;
        } else {
            if ((count > max) && isDown) {
                max = count;
            }
            count = 0;
            isDown = false;
        }

    }
    if ((count > max) && isDown) {
        max = count;
    }
    if ((max + 1) < 3) {
        max = -1;
    }
    return max + 1;
  }
  