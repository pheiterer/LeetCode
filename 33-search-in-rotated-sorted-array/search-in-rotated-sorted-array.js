/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (nums.length === 1) return nums[0] === target ? 0 : -1;

    let L = 0;
    let R = nums.length - 1;
    let minValue = nums[L];
    let minIndex = 0;

    if (nums[L] > nums[R]) {
        while (L <= R) {
            const min = Math.floor(L + (R - L) / 2);
            if (nums[min] === target) return min;

            if (nums[min] < minValue) {
                minValue = nums[min];
                minIndex = min;
                R = min - 1;
            } else L = min + 1;
        }
    };

    if (target >= nums[minIndex] && target <= nums[nums.length - 1]){
        L = minIndex;
        R = nums.length - 1;
    } else {
        L = 0;
        R = minIndex;
    }

    while (L <= R) {
        const mid = Math.floor(L + (R - L) / 2);
        if (nums[mid] === target) return mid;

        if (nums[mid] < target) L = mid + 1;
        else R = mid - 1;
    }

    return -1;
};