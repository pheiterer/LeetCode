/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const canEat = (k, h) => {
        let i = 0;

        while (h > 0){
            const spentTime = Math.ceil(piles[i]/k);
            h -= spentTime;
            i++;
            if (!piles[i] && h >= 0) return true;
        }

        return false;
    }

    let result = 1;
    let L = 1;
    let R = Math.max(...piles);
    while(L <= R){
        const mid = Math.floor(L + (R - L) / 2);

        if (canEat(mid, h)){
            result = mid;
            R = mid - 1;
        } else {
            L = mid + 1;
        }
    }

    return result;
};
