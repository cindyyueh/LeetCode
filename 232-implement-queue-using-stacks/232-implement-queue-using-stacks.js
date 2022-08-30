
var MyQueue = function() {
    this.one = []
    this.two = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    const length = this.one.length
    for (let i = 0; i < length; i++) {
        this.two.push(this.one.pop())
    }
    return this.two.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let length = this.two.length
    for (let i = 0; i < length; i++) {
        this.one.push(this.two.pop())
    }
    console.log(this.one)
    console.log(this.two)
    return this.one.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.two.length > 0) {
        return this.two[0]
    }
    return this.one[this.one.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if (this.one.length === 0 && this.two.length === 0) {
        return true
    }
    return false
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */