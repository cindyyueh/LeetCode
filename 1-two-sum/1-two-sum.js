/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsObj = {}
    
    for (let i = 0; i < nums.length; i++) {
        let remainder = target - nums[i]
        
        if (numsObj[remainder] !== undefined) {
            return [numsObj[remainder], i]
        } else {
            numsObj[nums[i]] = i
        }
    }
};