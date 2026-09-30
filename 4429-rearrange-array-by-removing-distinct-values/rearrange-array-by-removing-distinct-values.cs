public class Solution {
public int[] RearrangeArray(int[] nums)
{
    Dictionary<int, int> values = new();

    foreach (int num in nums)
    {
        if (!values.TryAdd(num, 1))
            values[num]++;
    }

    int[] distincts = values.Keys.OrderBy(x => x).ToArray();

    List<int> result = new(nums.Length);

    bool hasValues = true;

    while (hasValues)
    {
        hasValues = false;

        foreach (int curr in distincts)
        {
            if (values[curr] == 0)
                continue;

            result.Add(curr);
            values[curr]--;
            hasValues = true;
        }
    }

    return result.ToArray();
}
}