var input = ["a","b","c"]
// Output: {0:a, 100:b, 200:c }


var result = input.reduce(function(acc,current,index){
    console.log(index,acc,current)
    var obj = {}
    var num =0;
    // for(let i=0;i<input.length;i+100){

    //     obj[current]=i;
    //     console.log("obj", obj)
    // }
    
})
console.log("result",result)