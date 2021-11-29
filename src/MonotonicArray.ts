export function isMonotonic(array: number[]) {
    // Write your code here.
    if(array.length < 2) {
        return true;
    }
    let difference = array[1] - array[0];
    for(let i = 2;i < array.length;i++) {
        if(difference === 0) {
            difference = array[i] - array[i-1];
            continue;
        }
        let newdifference = array[i] - array[i-1];

        if((newdifference >= 0 && difference > 0) || (newdifference <= 0 && difference < 0)) {
            continue;
        } else {
            return false;
        }

    }
    return true;
  }

  export function isMonotonic2(array: number[]) {
    // Write your code here.
    let isNegativeDiff = true;
    let isPositiveDiff = true;
    for (let i = 1;i< array.length;i++) {
        if(array[i] - array[i-1] > 0) {
            isNegativeDiff = false;
        } 
        if (array[i] - array[i-1] < 0) {
            isPositiveDiff = false;
        }
    } 
    return isPositiveDiff || isNegativeDiff;
  }
  
  