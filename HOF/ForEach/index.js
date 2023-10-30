console.log("forEach")

const arr = [1,2,3,4,5];
console.log(" arr",arr)
arr.forEach((item,index,arr)=>
arr[index] = item*2
)
console.log("updated arr",arr)