class MinStack:

    def __init__(self):
        self.min_stack = []

    def push(self, val: int) -> None:
        if self.min_stack:
            min_ele = self.min_stack[-1][1]
            min_ele1 = min(min_ele,val)
            self.min_stack.append([val,min_ele1])
        else:
            self.min_stack.append([val,val])

    def pop(self) -> None:
        ele = self.min_stack.pop()
        return ele[1]

    def top(self) -> int:
        return self.min_stack[-1][0]

    def getMin(self) -> int:
        return self.min_stack[-1][1]
