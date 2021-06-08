export function generateDocument(characters: string, document: string) {
    let characterMap = new Map<String, number>();
    for (const char of characters) {
        if (characterMap.has(char)) {
            characterMap.set(char, (characterMap.get(char) as number) + 1);
        } else {
            characterMap.set(char, 1);
        }
    }
    console.log(characterMap)
    for (const char of document) {
        let out = characterMap.get(char);
        if (out && out >= 0) {
            characterMap.set(char, (characterMap.get(char) as number) - 1);
            continue;
        }
        return false;
    }
    return true;
  }