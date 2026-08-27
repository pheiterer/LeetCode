public class Solution {
    public IList<IList<int>> FindDisappearedNumbers(int[] nums, int lower, int upper) {
        var result = new List<int[]>();
        var hash = new HashSet<int>();
        foreach(int value in nums){
            hash.Add(value);
        }

        for (int i = lower; i <= upper; i++){
            if (hash.Contains(i)) continue;
            var group = new int[2]{ i , i };
            for (int j = i+1; j <= upper; j++){
                if (hash.Contains(j)){
                    group[1] = j - 1;
                    i = j;
                    break;
                }
                if(j == upper){
                    i = j;
                    group[1] = j;
                }
            }
            result.Add(group);
        }

        return result.ToArray();
    }
}