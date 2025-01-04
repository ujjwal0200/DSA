let nums = [1,1,2];

let obj = {},
  n = nums.length,
  res = 0,
  i = 0,
  j = 0;
while (j < n) {
  if (nums[i] in obj) {
    nums.splice(i, 1);
    nums.push("_")
    res++;
  } else {
    obj[nums[i]] = 1;
    i++;
  }
  j++;
}

console.log(res, nums);
