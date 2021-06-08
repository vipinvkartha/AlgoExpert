export function nonConstructibleChange(coins: number[]) {
    // Write your code here.
    coins.sort((a,b) => a-b);
      let currChange = 0;
      for (const coin of coins) {
          if (coin > currChange + 1) {
              return currChange + 1;
          } else {
              currChange += coin;
          }
      }
      return currChange + 1;
  }
  