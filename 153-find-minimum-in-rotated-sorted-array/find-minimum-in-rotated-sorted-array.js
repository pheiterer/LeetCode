/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    if (nums.length === 1) return nums[0];

    let L = 0;
    let R = nums.length - 1;
    if (nums[L] < nums[R]) return nums[L];
    
    let minValue = nums[R];
    while (L <= R) {
        const mid = Math.floor(L + (R - L) / 2);
        if (nums[mid] < minValue){
            minValue = nums[mid];
            R = mid - 1;
        } else L = mid + 1
    }

    return minValue;
};