/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let result = [];
    for(let i = 0; i < operations.length; i++){
        const curr = operations[i];

        switch(curr) {
            case 'D':
                result.push(result[result.length - 1] * 2);
                break;

            case 'C':
                result.pop();
                break;

            case '+':
                result.push(result[result.length - 1] + result[result.length - 2]);
                break;
            
            default:
                result.push(Number(curr))
        }
    }

    return result.reduce((acc, value) => acc += value, 0)
};