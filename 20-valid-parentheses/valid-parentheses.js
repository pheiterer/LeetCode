/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = { '(':')', '{':'}', '[':']'};
    let stack = [];
    for (let i = 0; i < s.length; i++){
        const curr = s[i];
        switch (curr){
            case '(':
            case '[':
            case '{':
                stack.push(curr);
                break;
            default:
                const lastBracket = stack.pop();
                if (curr != map[lastBracket]) return false;
        }
    }
    return stack.length === 0
};