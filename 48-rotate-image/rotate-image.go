func rotate(matrix [][]int)  {
    temp := copyMatrix(matrix)
    column := len(matrix[0])-1
    row := 0

    for {
        for i :=0; i < len(matrix); i++{
            matrix[i][column] = temp[row][i]
            fmt.Println(temp)
        }

        column--

        if column < 0{
            break
        }

        row++
    }
}

func copyMatrix(matrix [][]int) [][]int {
    copy := make([][]int, len(matrix)) // Cria um slice do mesmo tamanho
    for i := range matrix {
        copy[i] = append([]int(nil), matrix[i]...) // Copia cada linha
    }
    return copy
}