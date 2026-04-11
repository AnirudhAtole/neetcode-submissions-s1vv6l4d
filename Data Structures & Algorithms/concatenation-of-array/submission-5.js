class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const numsLength = nums.length;
        const dupArr = new Array(numsLength * 2);
        for(let i = 0 ; i < numsLength ; i++){
            dupArr[i] = nums[i];
            dupArr[i+numsLength] = nums[i]
        };
        return dupArr
    }
}
