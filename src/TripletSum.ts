type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number) {
  // Write your code here.
  const triplets: Triplet[] = [];
  array.sort((a,b) => a-b);
  for (let i = 0; i < array.length - 2; i++) {
      let left = i + 1;
      let right = array.length - 1;
      while (left < right) {
          let currSum = array[left] + array[right] + array[i];
          if (targetSum === currSum) {
              triplets.push([array[i], array[left], array[right]]);
              left++;
              right--;
          } else if (currSum < targetSum) {
              left++;
          } else {
              right--;
          }
      }
  }
  return triplets;
}
