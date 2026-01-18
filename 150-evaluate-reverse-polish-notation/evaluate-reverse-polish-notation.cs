public class Solution {
    public int EvalRPN(string[] tokens) {
        if (tokens.Length == 1) return int.Parse(tokens[0]);
        var result = new Stack<int>();

        for(int i = 0; i < tokens.Length; i++){
            string value = tokens[i];
            int helper;
            switch(value){
                case "+":
                    helper = result.Pop();
                    result.Push(result.Pop() + helper);
                    break;
                case "-":
                    helper = result.Pop();
                    result.Push(result.Pop() - helper);
                    break;
                case "*":
                    helper = result.Pop();
                    result.Push(result.Pop() * helper);
                    break;
                case "/":
                    helper = result.Pop();
                    result.Push(result.Pop() / helper);
                    break;
                default:
                    result.Push(int.Parse(value));
                    break;
            }
        }

        return result.Pop();
    }
}