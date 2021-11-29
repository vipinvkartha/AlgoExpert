export function reverseWordsInString(string: string) {
    // Write your code here.
      const characters: string[] = [];
      for (const char of string) {
          characters.push(char);
      }
      reverseList(characters, 0, characters.length-1);
      
      let startWord = 0;
      while(startWord < characters.length) {
          let endWord = startWord;
          while(endWord < characters.length && characters[endWord] !== ' ') {
              endWord++;
          }
          reverseList(characters, startWord, endWord-1);
          startWord = endWord+1;
      }
    return characters.join('');
  }
  
  function reverseList(list: string[], start: number, end: number) {
      while (start < end) {
          const temp = list[start];
          list[start] = list[end];
          list[end] = temp;
          start++;
          end--;
      }
  }
  