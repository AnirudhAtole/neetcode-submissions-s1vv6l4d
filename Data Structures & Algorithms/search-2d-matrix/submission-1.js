class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let totalRows = matrix.length;
        let totalCols = matrix[0].length;
        let l = 0 , r = totalRows * totalCols;
        while(l < r){
            let m = (l+r)>>1;
            let i = Math.trunc(m / totalCols);
            let j = m % totalCols;
            if(matrix[i][j] == target){
                return true;
            }
            else if(matrix[i][j] > target){
                r = m 
            }
            else{
                l = m + 1
            }
        }
        return false;
    }
}
