let nums=[-1,0,1,2,-1,-4]

let ans=[],n=nums.length,obj={}
for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        if(i===j) continue;
        for(let k=0; k<n; k++){
            if(i===k || j===k) continue;
            if(nums[i]+nums[j]+nums[k]===0){
            if(!obj[`${[nums[i],nums[j],nums[k]]}`]){
                ans.push([nums[i],nums[j],nums[k]]);
                obj[`${[nums[i],nums[j],nums[k]]}`]=1
            }
                
            }
        }
    }
    console.log(ans)
}
