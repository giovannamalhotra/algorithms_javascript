/* Implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "*") → true
isMatch("aa", "a*") → true
isMatch("ab", "?*") → true
isMatch("aab", "c*a*b") → false
*/


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    
    var result = true;
    var sIndex = 0;
    var pIndex = 0;
    var skip = false;
    var pIndexAfterWildcard = 0;

    while (sIndex < s.length && pIndex < p.length) {
        
        if (p.charAt(pIndex) === "*") { 

            pIndex++; 
            if (pIndex === p.length) {
                return true; //result should remain true.
            } else {
                skip = true; 
                pIndexAfterWildcard = pIndex;
                continue;
            }            
        }

        if (p.charAt(pIndex) === "?"  || p.charAt(pIndex) === s.charAt(sIndex) ) {
            pIndex++;
            sIndex++;
            //skip = false;
            continue;
        }
        
        if ( (!skip) && (p.charAt(pIndex) !== s.charAt(sIndex)) ) {
            result = false;
            break;
        } else {
            if (skip && (p.charAt(pIndex) !== s.charAt(sIndex)) ) {
                pIndex = pIndexAfterWildcard;
                sIndex++;
                continue;
            } else {
                continue;
            }
        }
    }

    if (pIndex === p.length && p.charAt(p.length-1) !== "*" && sIndex < s.length) {
        
        if ( skip && p.charAt(p.length-1) === "?" && (s.length - sIndex <= 1 ) ) {
            return true;
        } else {
            return false;
        }
    }
    
    else if (pIndex < p.length && sIndex === s.length && p.charAt(p.length-1) !== "*") {
        return false;
    }
    
    else if ( p.charAt(pIndex) === "*") {
        for (var i=pIndex + 1; i < p.length; i++) {
            if (p.charAt(i) !== "*") {
                return false;
            }
        }
    }
    
    return result;
};