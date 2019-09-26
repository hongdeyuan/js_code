/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length < 1 || matrix[0].length === 0 || matrix[0][0] > target) {
        return false
    } else {

        for (var i = 0; i < matrix.length; i++) {
            while (j < matrix.length) {
                if (matrix[i][j] === target) {
                    return true;
                }
                j++;
            }
        }
        return false;
    }
};

const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];
const target = 5;
console.log(searchMatrix(matrix, target));