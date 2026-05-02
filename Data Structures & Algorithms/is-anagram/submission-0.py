class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        freq_graph = [0] * 26
        for i in range(0,len(s)):
            s_ascii = ord(s[i])
            print(s_ascii)
            freq_graph[122 - s_ascii] += 1
            t_ascii = ord(t[i])
            freq_graph[122 - t_ascii] -= 1
        
        return all(x == 0 for x in freq_graph)