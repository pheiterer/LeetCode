public class Solution {
    public bool IsPalindromic(string s) {
        int l = 0;
        int r = s.Length - 1;
        while(l <= r){
            if(!IsBinariesPalindromic(GetBinaryString(s[l]), GetBinaryString(s[r]))) return false;
            l++;
            r--;
        }
        return true;
    }

    private string GetBinaryString(char c) => Convert.ToString((byte)c, 2).PadLeft(8, '0');

    private bool IsBinariesPalindromic(string a, string b){
        int l = 0;
        int r = a.Length - 1;
        while(r >= 0){
            if(a[l] != b[r]) return false;
            l++;
            r--;
        }

        return true;
    }
}