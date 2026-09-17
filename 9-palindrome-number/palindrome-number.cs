public class Solution {
    public bool IsPalindrome(int x) {
        if (x < 0 ) return false;
        string value = x.ToString();
        int l = 0;
        int r = value.Length - 1;

        while (l < r) {
            if (value[l] != value[r]) return false;
            l++;
            r--;
        }
        return true;
    }
}