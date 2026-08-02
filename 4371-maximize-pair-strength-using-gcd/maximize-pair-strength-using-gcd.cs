public class Solution {
    public long MaxPairStrength(int[] nums) {
        long result = 0;
        for (int l = 0; l < nums.Length - 1; l++)
        {
            for (int r = l + 1; r < nums.Length; r++)
            {
                long gcd = Gcd(nums[l], nums[r]);
                result = Math.Max(result, (nums[l] / gcd) * 1L * (nums[r] / gcd));
            }
        }
        return result;
    }

    int Gcd(int a, int b) {
        while (b != 0) {
            (a, b) = (b, a % b);
        }
        return Math.Abs(a);
    }
}