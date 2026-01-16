public class Solution {
    public IList<string> BuildArray(int[] target, int n) {
        List<string> result = new List<string>();
        int helper = 0;

        for (int i = 0; i <= n; i++){
            if (target[helper] == i+1) {
                result.Add("Push");
                helper++;
            }
            else result.AddRange(new string[] {"Push", "Pop"});
            if (helper == target.Length) break;
        }

        return result;
    }
}