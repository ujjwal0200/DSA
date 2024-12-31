let s="abcabcbb"

// I have to make a subsing;
let max=1;

for(let i=0; i<s.length; i++){
    let sub="";
    for(let j=i; j<s.length; j++){
        sub+=s[j];
        if(sub.length>max){
            let obj={};
            let flag=true;
            for(let k=0; k<sub.length; k++){
                if(obj[sub[k]]){
                    flag=false
                    break;
                }else{
                    obj[sub[k]]=1
                }
            }
            if(flag){
                max=sub.length;
            }
        }
    }

}

console.log(max);