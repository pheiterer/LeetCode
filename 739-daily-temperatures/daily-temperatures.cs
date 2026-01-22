public class Solution {
    public int[] DailyTemperatures(int[] temperatures) {
        Stack<int> stack = new Stack<int>();
        int[] result = new int[temperatures.Length];
        result[^1] = 0;

        for (int i = 0; i < temperatures.Length; i++){
            while(stack.Count> 0 && temperatures[stack.Peek()] < temperatures[i]){
                int index = stack.Pop();
                result[index] = i - index;
            }
            stack.Push(i);
        }

        return result;
    }
}