func merge(intervals [][]int) [][]int {
    sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})

    resp := [][]int{intervals[0]}

    for i := 1; i < len(intervals); i++ {
        prev := resp[len(resp)-1]
        curr := intervals[i]
        fmt.Println(curr)


        if ((curr[0] >= prev[0] && curr[0] <= prev[1]) ||
        (curr[1] >= prev[0] && curr[1] <= prev[1]) ||
        (prev[0] >= curr[0] && prev[0] <= curr[1]) ||
        (prev[1] >= curr[1] && prev[1] <= curr[1])){
            min := 0
            max := 0
            if curr[0] < prev[0] {
                min = curr[0]
            }else{
                min = prev[0]
            }
            if curr[1] > prev[1] {
                max = curr[1]
            }else{
                max = prev[1]
            }
            resp[len(resp)-1] = []int{min, max}
        }else{
            
            resp = append(resp, curr)
            continue
        }
    }



    if len(resp) == len(intervals){
        return resp
    }else{
        return merge(resp)
    }
}