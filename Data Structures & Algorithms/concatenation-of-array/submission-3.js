class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let dupArr = new Array(nums.length * 2);
        let i = 0
        for(i ; i < nums.length ; i++){
            dupArr[i] = nums[i];
        }
        for(let j = 0; j < nums.length ; j++){
            dupArr[i] = nums[j];
            i++;
        }
        return dupArr;
    }
}
