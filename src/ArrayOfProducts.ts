export function arrayOfProducts(array: number[]) {
    // Write your code here.
    let product = 1;
    let countofZeroes = 0;
    for (const elem of array) {
        if (elem !== 0)
            product *= elem;
        else
            countofZeroes++;
    }
    for (let i = 0; i < array.length; i++) {
        if (countofZeroes > 1) {
            array[i] = 0;
        } else if (countofZeroes > 0) {
            if (array[i] === 0)
                array[i] = product;
            else
                array[i] = 0;
        } else {
            array[i] = product / array[i];
        }
    }
    return array;
}


export function arrayOfProducts1(array: number[]) {
    // Write your code here.
    const products: number[] = new Array(array.length).fill(1);
    let leftRunningProduct = 1;
    for (let i = 0; i < array.length; i++) {
        products[i] = leftRunningProduct;
        leftRunningProduct *= array[i];
    }
    let rightRunningProduct = 1;
    for (let i = array.length - 1; i >= 0; i--) {
        products[i] *= rightRunningProduct;
        rightRunningProduct *= array[i];
    }
    return products;
}
  