export const firstNonRepeatingCharacter = (string: string) => {
    const out = new Map<string, boolean>();
    for (let i = 0;i < string.length; i++) {
        if (out.has(string[i])) {
            out.set(string[i], true);
        } else {
            out.set(string[i], false);
        }
    }
    for (const [key, value] of out) {
        if (value === false) {
            return string.indexOf(key);
        }
    }
    return -1;
}