public class MinStack {

    private Stack<int> stack;
    private Stack<int> minValue;

    public MinStack() {
        this.stack = new Stack<int>();    
        this.minValue = new Stack<int>();
    }
    
    public void Push(int val) {
        this.stack.Push(val);
        if(this.stack.Count == 1) minValue.Push(val);
        else if(this.minValue.Peek() >= val) this.minValue.Push(val);
    }
    
    public void Pop() {
        if(this.stack.Count == 0) return;
        if(this.minValue.Peek() == this.stack.Pop()) this.minValue.Pop();
    }
    
    public int Top() {
        if(this.stack.Count != 0) return this.stack.Peek();
        else throw new InvalidOperationException();
    }
    
    public int GetMin() {
        if(this.minValue.Count != 0) return this.minValue.Peek();
        else throw new InvalidOperationException();
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.Push(val);
 * obj.Pop();
 * int param_3 = obj.Top();
 * int param_4 = obj.GetMin();
 */