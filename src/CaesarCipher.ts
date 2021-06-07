export function caesarCipherEncryptor(string: string, key: number) {
    let out = '';

    key = key % 26

    for (let i = 0; i < string.length; i++) {
        let ascii = string.charCodeAt(i);
        ascii += key;
        if (ascii > 122) {
            ascii = ascii % 122 + 96;
        }
        out = out + String.fromCharCode(ascii);
    }
    return out;
}