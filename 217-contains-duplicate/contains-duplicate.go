func containsDuplicate(nums []int) bool {
    hash := make(map[int]struct{}, len(nums))

    for _,num := range nums{
        if _, ok := hash[num]; ok{
            return true   
        }
        hash[num] = struct{}{}
    }

    return false
}