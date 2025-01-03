let s = ")";

let stack = [],
  n = s.length;
//   stack2 = [];

// for (let i = 0; i < n; i++) {
//   if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
//     if (s[i] == "(") {
//       stack.push(")");
//     } else if (s[i] == "[") {
//       stack.push("]");
//     } else if (s[i] == "{") {
//       stack.push("}");
//     }
//   }
// }

// let i = n - 1;

// while (i >= 0) {
//   if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
//     i--;
//   } else {
//     if (stack.length && stack[stack.length - 1] == s[i]) {
//       while (stack.length && stack[stack.length - 1] == s[i]) {
//         stack.pop();
//         i--;
//       }
//     } else {
//       return false;
//     }
//   }
// }

let i = 0;

while (i < n) {
  //   while (stack.length && stack[stack.length - 1] == s[i]) {
  //     stack.pop();
  //     i++;
  //   }

  if (i > n) {
    break;
  } else if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
    if (s[i] == "(") {
      stack.push(")");
    } else if (s[i] == "[") {
      stack.push("]");
    } else if (s[i] == "{") {
      stack.push("}");
    }
    i++;
  } else {
    if (stack.length && stack[stack.length - 1] == s[i]) {
      while (stack.length && stack[stack.length - 1] == s[i]) {
        stack.pop();
        i++;
      }
    } else {
      console.log(false);
      return;
    }
  }
}
console.log(stack);

stack.length == 0 ? console.log(true) : console.log(false);
