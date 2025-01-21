func containsDuplicate(nums []int) bool {
    hash := make(map[int]struct{}, len(nums))
    for _,num := range nums{
        if _, exist := hash[num]; exist{
            return true   
        }
        hash[num] = struct{}{}
    }

    return false
}