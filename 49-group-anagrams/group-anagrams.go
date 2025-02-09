func groupAnagrams(strs []string) [][]string {
    var result [][]string
    words:=make(map[string]int)
    ids:=0;
    for _,str := range strs{
        count:=make([]rune,26)
        for _,c := range str{
            count[c - 'a']++
        }
        key:=string(count)
        if idx,seen := words[key]; !seen{
            words[key]=ids
            ids++
            result=append(result,[]string{str})
        }else{
            result[idx]=append(result[idx],str)
        }
    }
    return result
}