func isValidSudoku(board [][]byte) bool {

	for i := 0; i < len(board); i++ {

		rowMap := make(map[byte]bool)
		for j := 0; j < len(board[i]); j++ {
            curr := board[i][j]
			if curr == '.' {
				continue
			}
			if rowMap[curr] {
				return false
			} else {
				rowMap[curr] = true
			}
		}

        columnMap := make(map[byte]bool)
		for j := 0; j < len(board[i]); j++ {
            curr := board[j][i]
            if curr == '.' {
				continue
			}
			if columnMap[curr] {
				return false
			} else {
				columnMap[curr] = true
			}
        }

        squareMap := make(map[byte]bool)
        for j := (i/3)*3; j < (i/3)*3+3; j++ {
            for k := i%3*3; k < i%3*3+3; k++ {
                curr := board[j][k]
                if curr == '.' {
                    continue
                }

                if squareMap[curr] {
                    return false
                } else {
                    squareMap[curr] = true
                }
            }
        }
        
	}

	return true

}