class Solution {
    public int romanToInt(String s) {
        HashMap<Character, Integer> romanSymbols = new HashMap<>();
        romanSymbols.put('I',1);
        romanSymbols.put('V',5);
        romanSymbols.put('X',10);
        romanSymbols.put('L',50);
        romanSymbols.put('C',100);
        romanSymbols.put('D',500);
        romanSymbols.put('M',1000);

        List<Integer> numbers = new ArrayList<>();
        int result = 0;

        for(char letter : s.toCharArray()){
            numbers.add(romanSymbols.get(letter));
        }
        for(int i = 0; i < numbers.size(); i++){
            int curr = numbers.get(i);

            if(i+1 == numbers.size()){
                return  result += curr;
            }

            int next = numbers.get(i+1);

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