/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let L = 1;
        let R = n;

        while(L <= R){
            const mid  = Math.floor(L + (R - L) / 2);
            if (isBadVersion(mid)) R = mid - 1;
            else L = mid + 1;
        }

        return isBadVersion(R) ? R : L;
    };
};