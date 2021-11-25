export function minimumCharactersForWords(words: string[]) {
    // Write your code here.
    const resultMap = new Map<string, number>();
    for (const word of words) {
        const tempMap = new Map<string, number>();
        for(const char of word) {
            if(tempMap.has(char)) {
                const num: any = tempMap.get(char);
                tempMap.set(char, num + 1);
            } else {
                tempMap.set(char, 1);
            }
        }
        for (const [key, value] of tempMap) {
            if(resultMap.has(key)) {
                const count: any = resultMap.get(key);
                const curr: any = tempMap.get(key);
                resultMap.set(key, Math.max(count,curr));
            } else {
                const curr: any = tempMap.get(key);
                resultMap.set(key, curr);

            }
        }
    }
    const result: string[] = [];
    for (const [key, value] of resultMap) {
        for(let i = 0;i < value; i ++) {
            result.push(key);
        }
    }
    return result;
  }