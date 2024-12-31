let s = "cbbd";

let res = "";

for (let i = 0; i < s.length; i++) {
  let sub = "";
  for (let j = i; j < s.length; j++) {
    sub += s[j];
    if (res.length < sub.length) {
      if (checkPalindrome(sub)) {
        res = sub;
      }
    }
  }
}

console.log(res);

function checkPalindrome(s) {
  let pal = "";
  for (let i = s.length - 1; i >= 0; i--) {
    pal += s[i];
  }

  if (s === pal) {
    return true;
  }

  return false;
}

console.log(checkPalindrome("naman"));
