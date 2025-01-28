func canConstruct(ransomNote string, magazine string) bool {
    letter := make(map[rune]int)
    for _, char := range magazine{
        letter[char]++
    }

    for _, char := range ransomNote{
        if letter[char] > 0 {
            letter[char]--
        }else{
            return false
        }
    }

    return true
}