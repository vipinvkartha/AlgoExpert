export function hasSingleCycle(array: number[]) {
    // Write your code here.
    const countMap = new Map<number, number>();
    let isRepeat = false;
    for (let i = 0; i < array.length; i++) {
        let newIdx = i + array[i];
        if (newIdx >= array.length) {
            newIdx = newIdx % array.length;
            isRepeat = true;
        }
        else if (newIdx < 0) {
            newIdx = newIdx % array.length;
            newIdx += array.length;
            isRepeat = true;
        }
        if (countMap.has(newIdx)) {
            if (newIdx > 0) {
                return false;
            }
            for (let j = 0; j < array.length; j++) {
                if (countMap.has(j)) {
                    continue;
                } else {
                    return false;
                }
            }
        } else {
            countMap.set(newIdx, 1);
        }

    }
    return isRepeat;
  }

export function hasSingleCycle1(array: number[]) {
    // Write your code here.
    let numVisited = 0;
    let currIdx = 0;
    while (numVisited < array.length) {
        if (numVisited > 0 && currIdx === 0) {
            return false;
        }
        numVisited++;
        currIdx = (currIdx + array[currIdx]) % array.length;
        if (currIdx < 0) {
            currIdx += array.length;
        }
    }
    return currIdx === 0;
}

function getNextIdx(currIdx: number, array: number[]) {
    const jump = array[currIdx];
    const nextIdx = (currIdx + jump) % array.length;
    return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}

