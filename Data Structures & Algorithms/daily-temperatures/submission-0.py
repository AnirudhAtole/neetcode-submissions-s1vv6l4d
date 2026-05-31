class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        monotonic_stack = []
        for i in range(-1,-len(temperatures)-1,-1):
            if not monotonic_stack:
                monotonic_stack.append([temperatures[i],i])
                temperatures[i] = 0
            else:
                while monotonic_stack and monotonic_stack[-1][0] <= temperatures[i]:
                    monotonic_stack.pop()
                if monotonic_stack:
                    diff = monotonic_stack[-1][1] - i
                    monotonic_stack.append([temperatures[i],i])
                    temperatures[i] = diff
                else:
                    monotonic_stack.append([temperatures[i],i])
                    temperatures[i] = 0
        return temperatures

