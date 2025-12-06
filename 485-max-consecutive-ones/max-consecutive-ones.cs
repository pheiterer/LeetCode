public class Solution {
    public int FindMaxConsecutiveOnes(int[] nums) {
        int response = 0;
        int help = 0; 
        for (int i = 0; i < nums.Length; i++){
            if (nums[i] == 1){
                help++;
            } else {
                response = help > response ? help : response;
                help = 0;
            }
        }

        return help > response ? help : response;
    }
}