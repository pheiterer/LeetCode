func longestConsecutive(nums []int) int {
    if len(nums) == 0 {
        return 0
    }

    sort.Ints(nums)
    result := 0
    helper := 1

    fmt.Println(nums)

    for i := 1; i < len(nums); i++ {
        lastIndex := nums[i-1]
        curr := nums[i]
        if lastIndex + 1 == curr {
            helper++
        } else {
            if lastIndex == curr{
                continue
            }
            if helper > result {
                result = helper
            }
            helper = 1
        }
    }

    if helper > result {
        result = helper
    }

    return result
}