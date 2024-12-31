let arr=[3,2,4,2], t=6;

// for (let i=0; i<arr.length; i++){
//     for(let j=i+1 ; j<arr.length; j++){
//         if(arr[i]+arr[j]==t){
//             console.log(i,j)
//         }

//     }
// }

// arr=arr.sort();

// console.log(arr)
// arr=arr.sort();

// let i=0,j=arr.length-1;

// while(i!=j){
//     if(arr[i]+arr[j]>t){
//         j--;
//     }else if(arr[i]+arr[j]<t){
//         i++;
//     }else{
//         console.log([i,j]);
//         return;

//     }
// }
 let obj={};

 for(let i=0; i<arr.length; i++){
    if(!obj[arr[i]]){
        obj[arr[i]]=i+1;
    }
 }

 for(let i=0; i<arr.length; i++){
    let j=Math.abs(t-arr[i]);
    if(obj[j] && obj[j]-1!==i){
        console.log([i,obj[j]-1]);
        return;
    }

 }