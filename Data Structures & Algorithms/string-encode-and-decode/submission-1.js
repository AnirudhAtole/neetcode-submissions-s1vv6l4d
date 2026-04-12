class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for(let word of strs){
            let wordLength = word.length;
            result += wordLength + "#" + word;
        }
        console.log(result);
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0 , res = [];
        while(i < str.length){
            let j = i;
            while(str[j] != "#"){
                j += 1;
            }
            let wordLength = parseInt(str.slice(i,j));
            res.push(str.slice(j+1,j+1+wordLength));
            i = j + 1 + wordLength;
        }
        return res;
    }
}
