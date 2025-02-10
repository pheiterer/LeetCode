func majorityElement(nums []int) int {
    hashMap := make(map[int]int)
    for _, val := range nums {
        hashMap[val]++
        if hashMap[val] > ((len(nums)-1)/2){
            return val
        }
    }

    return -1
}