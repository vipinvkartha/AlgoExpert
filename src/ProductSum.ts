type SpecialArray = Array<number | SpecialArray>;

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
export function productSum(array: SpecialArray, multiplier = 1) {
    let sum = 0;
    for (let num of array) {
        if (Array.isArray(num)) {
            sum += productSum(num, multiplier + 1);
        } else {
            sum += num;
        }
    }
    return sum * multiplier;
}