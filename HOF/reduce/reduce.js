const arr = [1,2,33,5,6,2];
//find sum of arr element
const output = arr.reduce(function(acc,curr){
    acc= acc+curr;
    return acc
},0)


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


const maxOutput =  arr.reduce(function(max,curr){
   
 if(curr > max){
    max=curr
 }
 return max
},-Infinity)


const apiData = [
 {firstName:"Sarfaraz",lastName:"Sheikh",age:23},
 {firstName:"Aftab",lastName:"Sheikh",age:23},
 {firstName:"Ravi",lastName:"Verma",age:21},
 {firstName:"Ayush",lastName:"Singh",age:19},
 {firstName:"Sharukh",lastName:"Singh",age:70},
]


//  find all the firstName whose age is less than 30
// const ageLessThan30 = apiData.filter((item)=>item.age<30).map((name)=>name.firstName)
// console.log("ageLessThan30 ",ageLessThan30);
const age30 = apiData.reduce(function(acc,curr){
   if(curr.age<30){
    acc.push(curr.firstName)
   }
   return acc
},[])
console.log("age30",age30)
// output{23:2, 21:1,19:1,70:1}


//  const result = apiData.reduce((acc,curr,index)=>{
    
//     if(acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age]
//     }else{
//         acc[curr.age] =1
//     }
//     return acc

//  },{})
//  console.log("result",result)

// output = ["Sarfaraz Sheikh", "Ravi Verma", "Ayush Singh"]
// const getFullname = (apiData)=>{
//     var ans = []
//   for(let i=0;i<apiData.length;i++){
//     console.log("fname",apiData[i].firstName)
//     ans.push(apiData[i].firstName  +" "+ apiData[i].lastName)
//   }
//   return ans
// }
// console.log("getFullname",getFullname(apiData))

// const fullName = apiData.map((name)=>{
//     return name.firstName + " " + name.lastName
// })
// console.log("fullName",fullName)