/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let count = [];

    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
        count.push(s[i])
      }
        
      else if (s[i] === ')' && count.length > 0 && count[count.length - 1] === '(') {
        count.pop()
      }
      else if (s[i] === ']' && count.length > 0 && count[count.length - 1] === '[') {
        count.pop()
      }
      else if (s[i] === '}' && count.length > 0 && count[count.length - 1] === '{') {
        count.pop()
      }
        else {
            return false
        }
    }
    
  if (count.length === 0) {
    console.log('true')
    return true
  }
  console.log('false')
  return false
};