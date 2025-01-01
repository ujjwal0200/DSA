let x = -121;

// let y=Math.abs(x);
// let palindrom=0
// while(y!=0){
//     let last=y%10;
//     y=Math.floor(y/10);
//     palindrom+=last;
//     palindrom*=10;
// }
// if(x<0){
//     palindrom=-palindrom
// }

// palindrom=palindrom/10;

// console.log(palindrom)

// if(palindrom===x){
//     return true;
// }

// return false

let y = x.toString();

let pal = "";

for (let i = y.length - 1; i >= 0; i--) {
  pal += y[i];
}

if (y === pal) {
  return true;
}

return false;
