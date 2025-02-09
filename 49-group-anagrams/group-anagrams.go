func groupAnagrams(strs []string) [][]string {
    strsMap := make(map[string][]string)

    for i := 0; i < len(strs); i++ {
        var sortString string
        sortString = SortStringDesc(strs[i])
        strsMap[sortString] = append(strsMap[sortString], strs[i])
    }

    fmt.Println(strsMap)

    var result [][]string

    for  _, val := range strsMap {
        result = append(result, val)
    }

    return result

}

func SortStringDesc(s string) string {
    chars := []rune(s)
    sort.Slice(chars, func(i, j int) bool {
        return chars[i] > chars[j] // Sort in descending order
    })
    return string(chars)
}