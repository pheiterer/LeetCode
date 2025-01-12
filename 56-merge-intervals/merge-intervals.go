func merge(intervals [][]int) [][]int {
    sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})

    resp := [][]int{intervals[0]}

    for i := 1; i < len(intervals); i++ {
        prev := resp[len(resp)-1]
        curr := intervals[i]

        if prev[1] >= curr[0] {
            resp[len(resp)-1][1] = int(math.Max(float64(curr[1]),float64(prev[1])))
        } else {
            resp=append(resp, curr)
        }
    }

    return resp
}