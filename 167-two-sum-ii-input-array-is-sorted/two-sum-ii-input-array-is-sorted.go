func twoSum(numbers []int, target int) []int {
    left := 0
    right := len(numbers)-1
    for left < right {
        result := numbers[left] + numbers[right]
        if result == target {
            return []int{left+1, right+1}
        } else if result < target {
            left++
        } else {
            right--
        }
    }
    return nil
}