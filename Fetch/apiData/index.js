// try{

// fetch("https://fakestoreapi.com/products")
// .then(function(response) {
//   return response.json(); 
// })
// .then(function(result) {
//   console.log("result : ", result);
//  for(let i =0;i<result.length;i++){
//     var contianer = document.getElementById("container")
//     var newDiv = document.createElement("div");

//     document.write(` ${result[i].id} :  ${result[i].title} </br> </br>`)
    
//      contianer.append(newDiv)

//  }
// })
// .catch(function(err) {
//   console.log(err);
// });

// }
// catch(err){
//     console.error("catch block error",err)
// }

try {
    fetch("https://fakestoreapi.com/products")
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        console.log("result: ", result);
        var container = document.getElementById("container");
  
        for (let i = 0; i < result.length; i++) {
          var newDiv = document.createElement("div");
          var btn = document.createElement("button")
          newDiv.style.height="300px";
          newDiv.style.border="1px solid red";
          btn.style.height="30px";
          btn.style.width="60px";
          btn.style.border="1px solid black" ;
          btn.style.backgroundColor="red";
          btn.textContent="Buy"
          var img = document.createElement("img");
        
          img.style.height = "50%";
          newDiv.style.padding="10px 5px"
          newDiv.textContent = `${result[i].id} : ${result[i].title}`;
          img.src = result[i].image;
          container.appendChild(newDiv);
          newDiv.appendChild(img);
          newDiv.appendChild(btn)
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  } catch (err) {
    console.error("catch block error", err);
  }
  