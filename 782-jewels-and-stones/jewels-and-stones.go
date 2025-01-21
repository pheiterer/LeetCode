func numJewelsInStones(jewels string, stones string) int {
    var result int
    hash := make(map[rune]bool)
    for _, jew := range jewels {
        hash[jew] = true
    }

    for _, stone := range stones{
        if hash[stone]{
            result++
        }
    }
    
    return result
}