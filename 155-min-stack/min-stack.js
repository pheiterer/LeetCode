
var MinStack = function () {
    this.min = [];
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (!this.stack.length) this.min.push({ value: val, index: 0 });
    else if (val <= this.min[this.min.length - 1].value) this.min.push({ value: val, index: this.stack.length });
    this.stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.stack.length - 1 === this.min[this.min.length - 1].index) this.min.pop();
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min[this.min.length-1].value;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */