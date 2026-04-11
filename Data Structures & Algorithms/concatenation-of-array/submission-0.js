class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let dupNums = [];
        let twiceLength = nums.length * 2;
        for(let i = 0 ; i < twiceLength ; i++){
            const idx = i % nums.length;
            dupNums[i] = nums[idx]
        }
        return dupNums
    }
}
