let nums1 = [1, 3],
  nums2 = [2];

let n = nums1.length,
  m = nums2.length;

let nums3 = [];

let i = 0,
  j = 0;

while (i < n && j < m) {
  if (nums1[i] < nums2[j]) {
    nums3.push(nums1[i]);
    i++;
  } else {
    nums3.push(nums2[j]);
    j++;
  }
}

while (i < n) {
  nums3.push(nums1[i]);
  i++;
}

while (j < m) {
  nums3.push(nums2[j]);
  j++;
}

let o = nums3.length;
let half = Math.floor(o / 2);
let res = 0;

if (o % 2 === 0) {
  res = (nums3[half] + nums3[half - 1]) / 2;
  console.log("even");
} else {
  res = nums3[half];
}

return (res.toFixed(5));