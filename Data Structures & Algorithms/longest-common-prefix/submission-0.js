class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let longPrefix = "";
        for(let i = 0 ; i < strs[0].length ; i++){
            for(let s of strs){
                if(s[i] !== strs[0][i] || s.len == i){
                    return longPrefix
                }
            }
            longPrefix += strs[0][i]
        }
        return longPrefix
    }
}
