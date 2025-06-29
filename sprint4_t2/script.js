function modifyDOM() {
  
  var title = document.getElementById("mainTitle");
  title.innerHTML = "Modified Title using getElementById()";
  console.log("getElementById:", title);

 
  var firstPara = document.querySelector(".description");
  firstPara.style.color = "#511D43";
  firstPara.style.fontSize = "18px";
  console.log("querySelector:", firstPara);

  
  var allParas = document.querySelectorAll(".description");
  allParas.forEach(function(p) {
    p.classList.add("highlight");
  });
  console.log("querySelectorAll:", allParas);
}
