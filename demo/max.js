function max() {
    let nums=Array.prototype.slice.call(arguments)
    let max=0
    for(let i=0;i<nums.length;i++){
        let n=nums[i]
        if(n>max){
            max=n
        }
    }
    return max
}

console.log(max(1,34,6788,343,0))
console.log(max(-1,34,6788,343,0))