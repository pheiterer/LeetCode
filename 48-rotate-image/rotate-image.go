func rotate(matrix [][]int)  {
    size := len(matrix)

    //Transpose
    for i := 0; i < size; i++ {
        for j := i + 1; j < size; j++ {
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
        }
    }

    //Reflection
    for i := 0; i < size; i++{
        for j := 0; j < size/2; j++{
            matrix[i][j], matrix[i][size - j - 1] = matrix[i][size - j - 1], matrix [i][j]
        }
    }
}