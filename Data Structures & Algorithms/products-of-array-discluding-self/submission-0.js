class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let def = 1;
        let res = new Array(nums.length).fill(1);
        for(let i = 0 ; i < nums.length ; i++){
            res[i] = def;
            def *= nums[i];
        }
        console.log(nums)
        let pfix = 1;
        for(let i = nums.length -  1; i > -1 ; i--){
            res[i] *= pfix
            pfix *= nums[i];
        }
        return res;
    }
}
