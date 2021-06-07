export function tandemBicycle(redShirtSpeeds: number[], blueShirtSpeeds: number[], fastest: boolean) {
    // Write your code here.
    redShirtSpeeds.sort((a, b) => a - b);
    if (fastest) {
        blueShirtSpeeds.sort((a, b) => b - a);
    } else {
        blueShirtSpeeds.sort((a, b) => a - b);
    }
    let sum = 0;
    for (let i = 0; i < blueShirtSpeeds.length; i++) {
        sum += Math.max(blueShirtSpeeds[i], redShirtSpeeds[i]);
    }
    return sum;
}
