/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    if (tokens.length == 1) return Number(tokens[0]);
    let numPipe = [];

    for (let i = 0; i < tokens.length; i++) {
        let temp;
        const value = tokens[i];
        switch (value) {
            case "/":
                temp = numPipe.pop();
                numPipe.push(Math.trunc(numPipe.pop() / temp));
                break;
            case "*":
                temp = numPipe.pop();
                numPipe.push(numPipe.pop() * temp);
                break;
            case "+":
                temp = numPipe.pop();
                numPipe.push(numPipe.pop() + temp);
                break;
            case "-":
                temp = numPipe.pop();
                numPipe.push(numPipe.pop() - temp);
                break;
            default:
                numPipe.push(Number(value));
        }
        
        console.log(numPipe);


    }

    return numPipe.pop();
};