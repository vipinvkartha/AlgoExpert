export function twoNumberSum(array: number[], targetSum: number) {
    // Write your code here.
    let result: number[] = [];
    const temp: number[] = [];
    for (const num of array) {
        console.log(num);
        if (temp.indexOf(num) > -1) {
            console.log("Inside");
            result = result.concat([num, targetSum - num]);
            break;
        } else {
            temp.push(targetSum - num)
        }
        console.log(temp);
    }
    return result;
}
export function twoNumberSumSort(array: number[], targetSum: number) {
    // Write your code here.
    array.sort((a,b) => a- b);
    console.log(array);
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        const sum = array[left] + array[right];
        if (sum === targetSum) {
            return [array[left], array[right]];
        }
        else if (sum < targetSum) {
            left++;
        } else if (sum > targetSum) {
            right--;
        }
    }
    return [];
}