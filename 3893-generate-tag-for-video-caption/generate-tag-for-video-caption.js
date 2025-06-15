/**
 * @param {string} caption
 * @return {string}
 */
var generateTag = function(caption) {
    let result = ["#"];
    let splitedWords = caption.split(" ", 100);
    splitedWords = splitedWords.filter(value => value != '');
    if (splitedWords.length === 0) return result.join('');
    result.push(removeNonEnglishLetter(splitedWords[0]));
    for (let i = 1; i < splitedWords.length; i++){
        let curr = removeNonEnglishLetter(splitedWords[i]);
        result.push(curr.charAt(0).toUpperCase() + curr.slice(1).toLowerCase());
        if (result.join('').length >= 100) break;
    }

    return result.join('').slice(0,100);
};

const removeNonEnglishLetter = function(value) {
    let result = value.toLowerCase();
    for (let i = 0; i < value.length; i++){
        const curr = value[i].charCodeAt();
        if (curr < 97 && curr > 122){
            result = result.slice(0,i-1)+result.slice(i+1);
        }
    }
    return result;
}