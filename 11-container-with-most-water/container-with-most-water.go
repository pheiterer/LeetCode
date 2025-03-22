func maxArea(height []int) int {
    left, right := 0, len(height)-1
    result := 0

    for left < right {
        currLeft, currRight := height[left], height[right]

        tempResult := 0

        if currLeft < currRight {
            tempResult = (right - left) * currLeft
            left++
        } else {
            tempResult = (right - left) * currRight
            right--
        }

        if result < tempResult {
            result = tempResult
        }
    }

    return result
}