class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        diff_set = dict()
        for i , num in enumerate(nums):
            if target - num in diff_set:
                return [diff_set[target - num], i]
            else:
                diff_set[num] = i
        