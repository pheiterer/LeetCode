/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let result = [];
    for(let i = 0; i < operations.length; i++){
        const curr = operations[i];
        if (Number(curr)) result.push(Number(curr));
        else if (curr === '+') result.push(result[result.length-1]+result[result.length-2]);
        else if (curr === 'D') result.push(result[result.length-1]*2);
        else if (curr === 'C') result.pop();
    }

    return result.reduce((acc, value) => acc += value, 0)
};