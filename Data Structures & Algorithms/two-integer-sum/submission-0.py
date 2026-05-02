class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        diff_set = dict()
        for i in range(0,len(nums)):
            if target - nums[i] in diff_set:
                return [diff_set[target-nums[i]], i]
            else:
                diff_set[nums[i]] = i
        