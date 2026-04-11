class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let dupArr = new Array(nums.length * 2);
        let i = 0 , j = 0;
        while(i < nums.length * 2){
            if(i == nums.length){
                j = 0
            }
            dupArr[i] = nums[j];
            i++;
            j++;
        }
        return dupArr;
    }
}
