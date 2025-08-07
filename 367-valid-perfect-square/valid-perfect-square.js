/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let L = 0;
    let R = num;
    while (L <= R) {
        const mid = Math.floor(L + (R - L) / 2);
        const square = mid * mid;
        if (square === num) return true;
        if (square < num) L = mid + 1;
        else R = mid - 1;
    }

    return false;
};