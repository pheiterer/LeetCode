func isPalindrome(s string) bool {
    var result []rune 
    for _, char := range s {
        if 64 < char && char < 91 {
            result = append(result, char+32)
        }
        if 96 < char && char < 123 || 47 < char && char < 58{
            result = append(result, char)
        }
    }

    r := len(result)-1
    l := 0

    fmt.Println(r)
    fmt.Println(l)

    for l < r && l != r{
        if result[l] != result[r] {
            return false
        }
        l++
        r--
    }

    return true
}