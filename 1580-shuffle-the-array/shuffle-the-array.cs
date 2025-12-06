public class Solution {
    public int[] Shuffle(int[] nums, int n) {
int[] response = new int[n * 2];
int j = 0;

for (int i = 0; i < n; i++) {
    response[j++] = nums[i];     // da primeira metade
    response[j++] = nums[i + n]; // da segunda metade
}

        return response;
    }
}