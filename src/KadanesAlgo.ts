export function kadanesAlgorithm(array: number[]) {
	let sum = array[0];
	let maxSum = array[0];
	for (let i = 1; i < array.length; i++) {
		let num = array[i];
		sum = Math.max(num, num + sum);
		maxSum = Math.max(sum, maxSum);
	}
	return maxSum;
}