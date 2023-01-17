/**
 * https://leetcode.com/problems/min-stack
 * Time O(1) | Space O(1)
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
class MinStack {
  constructor() {
    this.head = null;
  }

  push(val) {
    this.head = !this.head
      ? new Node(val, val, null)
      : new Node(val, Math.min(val, this.head.min), this.head);
  }

  pop() {
    this.head = this.head.next;
  }

  top() {
    return this.head.val;
  }

  getMin() {
    return this.head.min;
  }
}

class Node {
  constructor(val, min, next) {
    this.val = val;
    this.min = min;
    this.next = next;
  }
}

/**
 * https://leetcode.com/problems/min-stack
 * Time O(1) | Space O(N)
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val, { minStack } = this) {
    this.stack.push(val);
    const isMinStackEmpty = !minStack.length;
    const hasNewMinValue = val <= this.top(minStack);
    const shouldAddMinValue = isMinStackEmpty || hasNewMinValue;
    if (shouldAddMinValue) minStack.push(val);
  }

  pop({ stack, minStack } = this) {
    const top = stack.pop();
    const shouldPopMinValue = top === this.getMin();
    if (shouldPopMinValue) minStack.pop();
  }

  top(stack = this.stack) {
    return stack.length ? stack[stack.length - 1] : null;
  }

  getMin(minStack = this.minStack) {
    return this.top(minStack);
  }
}
