let x=-123;

let y=Math.abs(x)

let res=0;



while(y!=0){
    let num=(y%10);
    y=Math.floor(y/10);
    res+=(num);
    res*=10
}
console.log(2**31)
if(x<0){
    return(-(res/10))
}else{
    return((res/10))

}
