var searchMatrix = function (matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;

    const rows = matrix.length;
    const cols = matrix[0].length;

    let left = 0;
    let right = rows * cols - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const row = Math.floor(mid / cols);
        const col = mid % cols;
        const value = matrix[row][col];

        if (value === target) return true;
        if (value < target) left = mid + 1;
        else right = mid - 1;
    }

    return false;
};
