export function classPhotos(redShirtHeights: number[], blueShirtHeights: number[]) {
    // Write your code here.
    redShirtHeights.sort((a,b) => b-a);
    blueShirtHeights.sort((a,b) => b-a);
    let out = true;
    if (blueShirtHeights[0] > redShirtHeights[0]) {
        for (let i = 0;i < blueShirtHeights.length; i++) {
            if (blueShirtHeights[i] > redShirtHeights[i]) {
                continue;
            } else {
                out = false;
                break;
            }
        }
    } else {
        for (let i = 0;i < blueShirtHeights.length; i++) {
            if (blueShirtHeights[i] < redShirtHeights[i]) {
                continue;
            } else {
                out = false;
                break;
            }
        }
    }
    return out;
  }
  