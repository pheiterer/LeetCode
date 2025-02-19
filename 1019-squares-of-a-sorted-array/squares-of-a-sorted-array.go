func sortedSquares(nums []int) []int {
    result := make([]int, len(nums))
    left, right := 0, len(nums)-1
    index := len(nums)-1    

    for left <= right{
        leftPow := nums[left] * nums[left]
        rightPow := nums[right] * nums[right]

        if leftPow > rightPow{
            result[index] = leftPow
            left++
        } else {
            result[index] = rightPow
            right--
        }
        index--
    }

    return result
}