export function nextGreaterElement(array: number[]) {
    // Write your code here.
    const result = new Array(array.length).fill(-1);
    const stack: number[] = [];
    for (let i = 0; i < array.length * 2; i++) {
        let circularIdx = i % array.length;
        while(stack.length > 0 && (array[stack[stack.length - 1]] < array[circularIdx])) {
            const val = stack.pop()!;
            result[val] = array[circularIdx];
        }
			stack.push(circularIdx);
    }
    return result;
  }