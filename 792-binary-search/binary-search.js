/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let L = 0;
    let R = nums.length - 1;
    while (L <= R) {
        const mid = Math.floor(L + (R - L) / 2);
        if (nums[mid] == target) return mid;
        if (nums[mid] < target) L = mid+1;
        else R = mid - 1;
    }
    return -1;
};