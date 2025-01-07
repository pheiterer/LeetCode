class Solution {
    fun productExceptSelf(nums: IntArray): IntArray {
        var lMult = 1
        var rMult = 1
        val size = nums.size
        val lArr = IntArray(size)
        val rArr = IntArray(size) 

        for (i in nums.indices) {
            val j = size - i - 1
            lArr[i] = lMult
            rArr[j] = rMult
            lMult *= nums[i]
            rMult *= nums[j]
        }

        return lArr.zip(rArr) { l, r -> l * r }.toIntArray()
    }
}
