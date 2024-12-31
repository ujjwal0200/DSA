let arr=["flower","fsldlow"];

let res="";
let obj={};

for(let i=0; i<arr[0].length; i++){
    obj[arr[0][i]]=1;
}

for(let i=0; i<arr[1].length; i++){
    let str="";
    if(obj[arr[1][i]]){
        let j=i;
        while(j<arr[1].length && obj[arr[1][j]]){
            str+=arr[1][j++];
        }
    }
    if(str.length>res.length){
        res=str;
    }
}

console.log(res)