func isAnagram(s string, t string) bool {
    if len(s) != len(t){
        return false
    }
    hashMap := make(map[rune]int)

    for _, char := range s {
        hashMap[char]++
    }

    for _, char := range t {
        if (hashMap[char] > 0){
            hashMap[char]--
        } else {
            return false
        }
    }

    return true

}