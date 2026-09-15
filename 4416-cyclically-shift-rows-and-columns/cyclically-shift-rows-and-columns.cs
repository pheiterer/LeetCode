public class Solution {
    public int[][] CyclicShift(
        int n,
        int[][] grid,
        int[] rowShift,
        int[] colShift)
    {
        var temp = new int[n][];

        for (int i = 0; i < n; i++)
            temp[i] = new int[n];

        for (int i = 0; i < n; i++)
        {
            int shift = rowShift[i] % n;

            for (int j = 0; j < n; j++)
            {
                int newJ = (j - shift + n) % n;
                temp[i][newJ] = grid[i][j];
            }
        }

        var result = new int[n][];

        for (int i = 0; i < n; i++)
            result[i] = new int[n];

        for (int j = 0; j < n; j++)
        {
            int shift = colShift[j] % n;

            for (int i = 0; i < n; i++)
            {
                int newI = (i - shift + n) % n;
                result[newI][j] = temp[i][j];
            }
        }

        return result;
    }
}