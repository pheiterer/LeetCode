/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 1){
        return strs[0];
    }
    
    let result = ""; 

    let numbersOfLetters = 1;
    let index = 1;
    const size = strs[0].length;

    while(numbersOfLetters <= size){
        if (strs[0].substring(0,numbersOfLetters) ==
        strs[index].substring(0,numbersOfLetters)){
            index++;
            if (index == strs.length){
                result = strs[0].substring(0,numbersOfLetters);
                
                index = 1;
                numbersOfLetters++;
            }
        }else{
            return result;
        }
    }

    return result;
};