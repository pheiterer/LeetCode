func threeSum(nums []int) [][]int {
    var result [][]int
    sort.Ints(nums)

    for i := 0; i < len(nums)-2; i++ {
        if nums[i] > 0 {
            break
        }
        
        if i > 0 && nums[i] == nums[i-1] {
            continue
        }

        L, R := i+1, len(nums)-1
        for L < R {
            curr := nums[i] + nums[L] + nums[R]
            if curr == 0 {
                result = append(result, []int{nums[i], nums[L], nums[R]})

                for L < R && nums[L] == nums[L+1] {
                    L++
                }
                for L < R && nums[R] == nums[R-1] {
                    R--
                }
                
                L++
                R--
            } else if curr < 0 {
                L++
            } else {
                R--
            }
        }
    }
    return result
}