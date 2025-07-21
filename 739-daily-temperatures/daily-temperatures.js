/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const response = Array(temperatures.length).fill(0);
    const stack = [];
    for (const [index, value] of temperatures.entries()) {
        while (stack.length > 0 && stack[stack.length - 1][0] < value) {
            const curr = stack.pop();
            response[curr[1]] = index - curr[1];
        }

        stack.push([value, index]);
    }

    return response;
};