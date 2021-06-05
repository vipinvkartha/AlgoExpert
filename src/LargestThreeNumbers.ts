export const largestThree = (input: number[]) => {
    const out: number[] = [input[0], input[1], input[2]];
    out.sort((a, b) => (a - b));
    for (let i = 3; i < input.length; i++) {
        if (input[i] <= out[0]) {
            continue;
        }
        else if (input[i] > out[0] && input[i] <= out[1]) {
            updateAndShift(out, input[i], 0);
        } else if (input[i] > out[1] && input[i] <= out[2]) {
            updateAndShift(out, input[i], 1);
        } else {
            updateAndShift(out, input[i], 2);
        }
    }
    console.info(out);
    return out;
}

function updateAndShift(out: number[], input: number, index: number) {
    for (let i = 0; i < index; i++) {
        out[i] = out[i+1];
    }
    out[index] = input;

}