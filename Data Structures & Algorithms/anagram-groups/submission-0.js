class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anagramMap = new Map();

    let createStringHash = function(string){
        let alphaArr = new Array(26).fill(0);
        for(let idx=0 ; idx < string.length;idx++){
            let ix = string.charCodeAt(idx);
            alphaArr[ix-97] += 1;
        }
        let hashKey = alphaArr.join("#");
        if(anagramMap.has(hashKey)){
            anagramMap.get(hashKey).push(string)
        }
        else{
            let values = [string];
            anagramMap.set(hashKey,values);
        }
    };

    for(let ele of strs){
        createStringHash(ele);
    }

    return Array.from(anagramMap.values())
    }
}
