const arr = [1,2,33,5,6,2];
//find sum of arr element
const output = arr.reduce(function(acc,curr){
    acc= acc+curr;
    return acc
},0)
console.log("output : ",output)

// find max element from the arr

function maxElement (arr){
    var max = -Infinity;
    for(let i=0;i<arr.length;i++){
        if( arr[i]>max){
            max =arr[i]
        }

    }
    return max
}
console.log("maxElement ", maxElement(arr))

const maxOutput =  arr.reduce(function(max,curr){
   
 if(curr > max){
    max=curr
 }
 return max
},-Infinity)
console.log("maxOutput :",maxOutput)