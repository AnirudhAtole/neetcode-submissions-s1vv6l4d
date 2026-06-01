class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        ## first create a pair of [p,s]
        paired = []
        monotonic_stock = []
        for i in range(len(position)):
            paired.append([position[i],speed[i]])
        
        ##sort it
        paired = sorted(paired,key=lambda x:x[0],reverse=True)
        
        ##monotonic stack
        for pair in paired:
            time_taken = (target - pair[0])/pair[1]
            monotonic_stock.append(time_taken)
            if len(monotonic_stock) >= 2 and monotonic_stock[-1] <= monotonic_stock[-2]:
                monotonic_stock.pop()
        
        return len(monotonic_stock)