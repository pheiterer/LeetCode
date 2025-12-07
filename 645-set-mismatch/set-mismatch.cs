public class Solution {
    public int[] FindErrorNums(int[] nums) {
        int n = nums.Length;
        int[] count = new int[n + 1];
        int duplicate = 0;
        int missing = 0;

        foreach (int num in nums) {
            count[num]++;
        }

        for (int i = 1; i <= n; i++) {
            if (count[i] == 0) missing = i;
            else if (count[i] == 2) duplicate = i;
        }

        return new int[] { duplicate, missing };
    }
}