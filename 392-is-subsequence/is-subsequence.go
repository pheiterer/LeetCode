func isSubsequence(s string, t string) bool {
    sSize := len([]rune(s))
    if(sSize == 0){
        return true
    }

    j := 0
    
	for i := 0; i < len([]rune(t)); i++ {
        if (t[i] == s[j]){
            j++
            if(j == sSize){
                return true
            }
        }
    }

    return false
}