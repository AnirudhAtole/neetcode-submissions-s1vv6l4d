class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack_token = []
        for token in tokens:
            if token in ["*","-","+","/"]:
                if stack_token:
                    ele1 = stack_token.pop()
                    ele2 = stack_token.pop()
                    if token == "+":
                        stack_token.append(ele1+ele2)
                    if token == "/":
                        stack_token.append(int(ele2/ele1))
                    if token == "*":
                        stack_token.append(ele1*ele2)
                    if token == "-":
                        stack_token.append(ele2-ele1)
            else:
                stack_token.append(int(token))
        return stack_token[0]