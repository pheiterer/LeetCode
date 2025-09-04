/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const maxPile = Math.max(...piles);

const canFinish = (k) => 
    piles.reduce((hours, pile) => hours + Math.floor((pile + k - 1) / k), 0) <= h;


    let left = 1, right = maxPile;

    while (left < right) {
        const mid = (left + right) >> 1;
        if (canFinish(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};
