export function tournamentWinner(competitions: string[][], results: number[]) {
    // Write your code here.
    const resultMap: Map<String, number> = new Map();
    for (let idx = 0; idx < results.length; idx++) {
        const winner = results[idx] === 1 ? competitions[idx][0] : competitions[idx][1];
        if (resultMap.has(winner)) {
            const val = resultMap.get(winner) as number;
            resultMap.set(winner, val + 1);
        } else {
            resultMap.set(winner, 1);
        }
    }
    let max = 0;
    let name: String = '';
    for (const [key, value] of resultMap.entries()) {
        if (value > max) {
            max = value;
            name = key;
        }
    }
    return name;
}

export function tournamentWinnerOptimised(competitions: string[][], results: number[]) {
    // Write your code here.
    const resultMap: Map<String, number> = new Map();
    let currentBestteam = '';
    resultMap.set(currentBestteam, 0);
    for (let idx = 0; idx < results.length; idx++) {
        const winner = results[idx] === 1 ? competitions[idx][0] : competitions[idx][1];
        if (resultMap.has(winner)) {
            const val = resultMap.get(winner) as number;
            resultMap.set(winner, val + 1);
        } else {
            resultMap.set(winner, 1);
        }
        if((resultMap.get(winner)) as number > (resultMap.get(currentBestteam) as number) ) {
            currentBestteam = winner;
        } 
    }
    return currentBestteam;
}