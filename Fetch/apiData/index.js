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
  
  const promise1 = new Promise()
  const promise2 = new Promise()
  const promise3 = new Promise()
  const promise4 = new Promise()
  proimise.all[promise1,promise2]

//   Day 1: It was a great day! I participated in the CodeChef contest and successfully solved two problems. However, I faced some challenges while taking input from the CodeChef platform. Overall, it was a productive day.