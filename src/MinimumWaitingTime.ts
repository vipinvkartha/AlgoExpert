export function minimumWaitingTime(queries: number[]) {
    let out = 0;
    queries.sort((a,b) => a-b);
    for (let i = 0; i < queries.length; i++) {
        out += queries[i] * (queries.length - (i + 1));
    }
    return out;
  }
  