func maxNumberOfBalloons(text string) int {
    letters := make(map[rune]int)
    result := 0

    for _, char := range text {
        letters[char]++
    }

    for {
        flag := true
        for _, char := range "balloon"{
            if letters[char] > 0 {
                letters[char]--
            } else {
                flag = false
                break
            }
        }
        if !flag {
            break
        }
        result++
    }

    return result
}