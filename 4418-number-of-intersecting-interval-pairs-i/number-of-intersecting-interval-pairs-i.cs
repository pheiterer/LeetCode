public class Solution {
    public int CountIntersectingIntervals(int[][] intervals) {
        int result = 0;
        for (int i = 0; i < intervals.Length; i++){
            int currX = intervals[i][0];
            int currY = intervals[i][1];

            int j = i + 1;
            while(j < intervals.Length){
                int nextX = intervals[j][0];
                int nextY = intervals[j][1];
                if ((currX >= nextX && currX <= nextY) || (currY >= nextX && currY <= nextY) || (nextX >= currX && nextX <= currY) || (nextY >= currX && nextY <= currY)) {
                    result++;
                }
                j++;
            }
        }

        return result;
    }
}