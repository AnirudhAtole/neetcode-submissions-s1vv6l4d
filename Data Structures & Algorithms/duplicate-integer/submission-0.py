class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        hash_set = set();
        for ele in nums:
            if ele in hash_set:
                return True
            else:
                hash_set.add(ele)
        return False
        