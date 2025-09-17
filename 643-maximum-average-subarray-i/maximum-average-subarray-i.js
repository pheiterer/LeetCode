/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let result = null;
    let track = 0;

    for (let i = 0; i < nums.length; i++){
        track += nums[i];
        if (i === k-1) result = track/k;
        if (i < k) continue;
        track -= nums[i-k];
        result = Math.max(track/k, result);
    }

    return result;

};