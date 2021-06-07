export function runLengthEncoding(string: string) {
    // Write your code here.
    let i = 0;

    let out = '';
    while (i < string.length) {
        let count = 1;
        let temp = string[i];
        let j = i + 1;
        while (string[j] === temp) {
            count++;
            j++;
        }
        let res = Math.floor(count / 9);
        let rem = count % 9;
        if (res > 0) {
            for (let k = 1; k <= res; k++) {
                out = out.concat(`9${temp}`);
            }
        }
        if (rem > 0) {
            out = out.concat(`${rem}${temp}`);
        }
        i += count;

    }
    return out;
}

export function runLengthEncoding2(string: string) {
    let prevChar = string[0];
    let out: string = '';
    let count = 1;
    let tempOut: string = prevChar;
    for (let i = 1; i < string.length; i++) {
        if ((string[i] === prevChar) && (count < 9) ) {
            count++;
            prevChar = string[i];
        } else {
            tempOut = prevChar;
            out = out.concat(count.toString(),tempOut);
            count = 1;
            prevChar = string[i];
        }
    }
    out = out.concat(count.toString(),prevChar);
    return out;
}
