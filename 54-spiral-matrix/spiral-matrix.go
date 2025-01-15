func spiralOrder(matrix [][]int) []int {
    var result []int 
    rowSize := len(matrix)
    columnSize := len(matrix[0])

    if (rowSize == 1){
        for _, value := range matrix[0]{
            result = append(result, value)
        }
        return result
    }

    if (columnSize == 1){
        for _, value := range matrix{
            result = append(result, value[0])
        }
        return result
    }

    i := 0
    j := 1

    for i < columnSize{
        result = append(result, matrix[0][i])
        i++
    }
    
    i--

    fmt.Println(i)
    fmt.Println(j)

    for j < rowSize{
        result = append(result, matrix[j][i])
        j++
    }

    j--
    i--

    for i >= 0{
        result = append(result, matrix[j][i])
        i--
    }

    j--

    for j > 0{
        result = append(result, matrix[j][0])
        j--
    }
    
    subMatrix := extractSubmatrix(matrix, 1, rowSize-1, 1, columnSize-1)

        fmt.Println(subMatrix)


    if len(subMatrix) > 0 && len(subMatrix[0]) > 0{
        return append(result, spiralOrder(subMatrix)...)
    }else{
        return result
    }

}

func extractSubmatrix(matrix [][]int, rowStart, rowEnd, colStart, colEnd int) [][]int {
    submatrix := [][]int{}

    for i := rowStart; i < rowEnd; i++ {
        submatrix = append(submatrix, matrix[i][colStart:colEnd])
    }

    return submatrix
}