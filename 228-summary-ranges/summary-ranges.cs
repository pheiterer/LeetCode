public class Solution {
    public IList<string> SummaryRanges(int[] nums) {
        if (nums.Length == 0) return [];
        var result = new List<string>();

        for (int i = 0; i < nums.Length; i++){
            result.Add(nums[i].ToString());
            if (i < nums.Length - 1 && nums[i] + 1 == nums[i+1]){
                while(i < nums.Length - 1 && nums[i] + 1 == nums[i+1]) i++;
                result[result.Count - 1] += $"->{nums[i]}";
            }
        }

        return result;
    }
}