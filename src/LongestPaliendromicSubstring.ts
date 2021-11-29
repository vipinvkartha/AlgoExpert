export function longestPalindromicSubstring(string: string) {
    // Write your code here.
    let currLongest = [0,1];
    const currSize = 2;
    for(let i = 0; i < string.length; i++) {
    const oddLong = getPaliendrome(string, i-1,i+1);
    const evenLong = getPaliendrome(string, i-1, i);
    const largest = oddLong[1] - oddLong[0] > evenLong[1] - evenLong[0] ? oddLong : evenLong;
    currLongest = currLongest[1] - currLongest[0] > largest[1] - largest[0] ? currLongest : largest;
    }
    return string.slice(currLongest[0], currLongest[1]);
  }

  function getPaliendrome(data: string, left: number, right: number) {
      while(left >=0 && right < data.length) {
          if (data[left] !== data[right]) {
              break;
          }
          left--;
          right++;
      }
      return [left + 1, right];
  }