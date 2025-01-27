let header = document.querySelector("#header");
let darkLig = document.querySelector("#liD");
let theme = document.querySelector("#theme");
let main = document.querySelector("#mainProd");
let links = document.querySelector("#links");
let toPurchase = document.querySelector("#b1");

//export
let addCart = document.querySelector("#b2");


//darkmode
let mode = "light";
darkLig.addEventListener("click", () => {
    if (mode === "light" && darkLig.classList.contains("ri-contrast-2-line")) {
        main.style.backgroundColor = "rgb(15 23 42)";
        header.style.backgroundColor = "rgb(15 23 42)";
        links.style.color = "#9763F6";
        main.style.color = "White";
        mode = "dark";
        header.style.color = "white";
        theme.innerText = "Dark";
        darkLig.className = "ri-moon-fill";
    } else {
        header.style.backgroundColor = "#EFF3EA"; 
        main.style.backgroundColor = "#EFF3EA";
        links.style.color = "rgb(0, 0, 82)";
        main.style.color = "black";
        header.style.color = "black"; 
        mode = "light";
        theme.innerText = "Light";
        darkLig.className = "ri-contrast-2-line";
    }
});

theme.addEventListener("click", function () {
    if (mode === "light" && darkLig.classList.contains("ri-contrast-2-line")) {
        main.style.backgroundColor = "rgb(15 23 42)";
        header.style.backgroundColor = "rgb(15 23 42)";
        links.style.color = "#9763F6";
        main.style.color = "White";
        mode = "dark";
        header.style.color = "white";
        theme.innerText = "Dark";
        darkLig.className = "ri-moon-fill";
    } else {
        header.style.backgroundColor = "#EFF3EA"; 
        main.style.backgroundColor = "#EFF3EA";
        links.style.color = "rgb(0, 0, 82)";
        main.style.color = "black";
        header.style.color = "black"; 
        mode = "light";
        theme.innerText = "Light";
        darkLig.className = "ri-contrast-2-line";
    }
  })

  //for purchase form
  toPurchase.addEventListener("click",()=>{
    window.location.href = "buyNow.html";
  });

  //for cart
  addCart.addEventListener("click",()=>{
    window.location.href = "myCart.html";
  });


  
  document.addEventListener("DOMContentLoaded",()=>{
    const referrer = document.referrer;
    if(referrer.includes("myCart.html")){
        if(addCart){
            addCart.style.display = "none";
        }
    }
  })