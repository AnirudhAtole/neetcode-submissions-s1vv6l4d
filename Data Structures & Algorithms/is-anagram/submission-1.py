class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        freq = [0] * 26
        for i in range(len(s)):
            freq[ord(s[i]) - 97] += 1
            freq[ord(t[i]) - 97] -= 1
        return all(x == 0 for x in freq)