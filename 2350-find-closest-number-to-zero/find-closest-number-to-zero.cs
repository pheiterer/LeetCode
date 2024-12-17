public class Solution {
    public int FindClosestNumber(int[] nums) {
        int[] result = {0,0};
        for(int i = 0; i < nums.Length; i++){
            int absNum = nums[i] < 0 ? -nums[i] : nums[i];
            
            if(i == 0 || absNum < result[1])                
                result = new int[] {nums[i], absNum};
            
            if(absNum == result[1]){
                result[0] = result[0] < nums[i] ? nums[i] : result[0];
            }
        }
        return result[0];
    }
}