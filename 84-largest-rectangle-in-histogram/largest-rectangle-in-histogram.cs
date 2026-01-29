public class Solution {
    public int LargestRectangleArea(int[] heights) {
int n = heights.Length;
int[] left = new int[n];
int[] right = new int[n];
Stack<int> stack = new Stack<int>();

for (int i = 0; i < n; i++)
{
    while (stack.Count > 0 && heights[stack.Peek()] >= heights[i])
        stack.Pop();

    left[i] = stack.Count == 0 ? -1 : stack.Peek();
    stack.Push(i);
}

stack.Clear();

for (int i = n - 1; i >= 0; i--)
{
    while (stack.Count > 0 && heights[stack.Peek()] >= heights[i])
        stack.Pop();

    right[i] = stack.Count == 0 ? n : stack.Peek();
    stack.Push(i);
}

int maxArea = 0;

for (int i = 0; i < n; i++)
{
    int width = right[i] - left[i] - 1;
    maxArea = Math.Max(maxArea, heights[i] * width);
}

return maxArea;

    }
}