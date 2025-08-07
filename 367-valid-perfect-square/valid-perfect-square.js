/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let L = 0;
    let R = num;
    while (L <= R) {
        const mid = Math.floor(L + (R - L) / 2);
        if (mid * mid === num) return true;
        if (mid * mid < num) L = mid + 1;
        else R = mid - 1;
    }

    return false;
};