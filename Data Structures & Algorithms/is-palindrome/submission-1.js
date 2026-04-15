class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let h = s.length - 1;
        const isAlpha = (ele) => (ele.charCodeAt(0) >= 65 && ele.charCodeAt(0) <= 122) || (ele.charCodeAt(0) >= 48 && ele.charCodeAt(0) <= 57)
        while(l <= h){
            console.log(isAlpha(s[l]))
            if(!isAlpha(s[l])){
                l++;
            }
            else if(!isAlpha(s[h])){
                h--;
            }
            else{
                if(s[l].toLowerCase() == s[h].toLowerCase()){
                    l++;
                    h--;
                }else{
                    return false;
                }
            }
        }
        return true;
    }
}
