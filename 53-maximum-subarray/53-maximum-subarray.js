/**
 * @param {number[]} nums
 * @return {number}
 */

// use Kadane's Algorithm
// "contiguous" usually means iteration

var maxSubArray = function(nums) {
    // first number is our max
    let max = nums[0]
    // initialize temp
    let temp = 0
    
    // iterate through array
    for (let i = 0; i < nums.length; i++) {
        // temp is now temp + the current number
        temp += nums[i]
        if (temp > max) {
            // if the sum of our current subarray is larger than our current max - the sum of our current subarray - we reassign the max
            max = temp
        }
        if (temp < 0) {
            // reset our temp to 0 if it becomes negative
            temp = 0
        }
    }
    return max
};