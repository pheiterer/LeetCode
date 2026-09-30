public class Solution {
    public int[] RearrangeArray(int[] nums) {
        List<int> result = [];
        Dictionary <int, int> values = new();
        SortedSet<int> distincts = new();
        foreach(int num in nums){
            if(values.ContainsKey(num)){
                values[num]++;
            } else {
                values.Add(num, 1);
            }
            distincts.Add(num);
        }

        bool shoudStay = true; 
        while(shoudStay){
            shoudStay = false;
            for (int i = 0; i < distincts.Count; i++){
                int curr = distincts.ElementAt(i);
                if (values[curr] == 0) continue;
                shoudStay = true;

                result.Add(curr);
                values[curr]--;
            }
        }

        return result.ToArray();
    }
}