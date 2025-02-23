func twoSum(numbers []int, target int) []int {
    left := 0
    right := len(numbers)-1
    for left < len(numbers)-1 {
        for right > left {
            result := numbers[left] + numbers[right]
            if result == target {
                return []int{left+1, right+1}
            }
            right--
        }
        left++
        right = len(numbers)-1
    }
    return nil
}