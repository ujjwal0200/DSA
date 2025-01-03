let num=3999;

let obj={
    1000:"M",
    1:"I",
    5:"V",
    10:"X",
    9:"IX",
    50:"L",
    40:"IL",
    100:"C",
    90:"IC",
    4:"IV",
    500:"D",
    400:"CD",
    900:"CM",
    1000:"M" 
}

let s=num.toString();
let n=s.length-1;

let arr=[];

for(let i=0; i<s.length; i++){
    arr.push((+s[i])*10**n);
    n--
}

for(let i=0; i<arr.length; i++){
    while(arr[i]);
}