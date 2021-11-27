export function groupAnagrams(words: string[]) {
    // Write your code here.
    const result = new Map<string, string[]>();
    const response: any[] = [];
    for (const word of words) {
        const sorted = (word.split('')).sort().join('');
        if(result.has(sorted)) {
            let out = result.get(sorted) as string[];
            out.push(word);
            result.set(sorted, out);
        } else {
            result.set(sorted, [word]);
        }
    }
    for (const [key, value] of result) {
        response.push(value);
    }
    return response;;
}
