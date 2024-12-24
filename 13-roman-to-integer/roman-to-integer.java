class Solution {
    public int romanToInt(String s) {
        int result = 0;
        
        HashMap<Character, Integer> romanSymbols = new HashMap<>();
        romanSymbols.put('I',1);
        romanSymbols.put('V',5);
        romanSymbols.put('X',10);
        romanSymbols.put('L',50);
        romanSymbols.put('C',100);
        romanSymbols.put('D',500);
        romanSymbols.put('M',1000);
        
        for(int i = 0; i < s.length(); i++){
            int curr = romanSymbols.get(s.charAt(i));

            if(i+1 == s.length()){
                return  result += curr;
            }

            int next = romanSymbols.get(s.charAt(i+1));

            if(curr < next){
                result = result + (next - curr);
                i++;
            }else{
               result += curr;
            }
        }

        return result;
    }
}