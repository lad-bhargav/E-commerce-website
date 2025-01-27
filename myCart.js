
   let cardCart = document.querySelectorAll(".cardCart");
   for(let card of cardCart){
   card.style.display = "none";
}



let referrer = document.referrer;
let card1b = document.querySelector("#card1b");
let card2b = document.querySelector("#card2b");
let card3b = document.querySelector("#card3b");
let card4b = document.querySelector("#card4b");
document.addEventListener("DOMContentLoaded",()=>{
   if(cardCart && referrer){
         if(referrer.includes("buyI14.html")){
            card1b.style.display = "block";
         }
         else if(referrer.includes("buyI15.html")){
            card2b.style.display = "block";
         }
         else if(referrer.includes("buyi16.html")){
            card3b.style.display = "block";
         }
         else if(referrer.includes("buyi16pro.html")){
            card4b.style.display = "block";
         }
   }
});

//cartworking

let para1 = document.querySelector("#para1");
let para2 = document.querySelector("#para2");
let para3 = document.querySelector("#para3");
let para4 = document.querySelector("#para4");
/*let myCart = [];

let product1 = {
   id : 1,
   name : "iPhone 14",
   quantity : 1
}

let product2 = {
   id : 2,
   name : "iPhone 15",
   quantity : 1
}

let product3 = {
   id : 3,
   name : "iPhone 16",
   quantity : 1
}

let product4 = {
   id : 4,
   name : "iPhone 16 pro",
   quantity : 1
}

let addToCart = (product)=>{
   let exstingProduct = myCart.find(item=> item.id === product.id);
   if(exstingProduct){
      exstingProduct.quantity += product.quantity;
   }else{
      myCart.push(product);
   }
}

addToCart(product1);
addToCart(product4);

para1.innerText = myCart.map(item => `${item.name} (x${item.quantity})`).join(", ");
para2.innerText = myCart.map(item => `${item.name} (x${item.quantity})`).join(", ");
para3.innerText = myCart.map(item => `${item.name} (x${item.quantity})`).join(", ");
para4.innerText = myCart.map(item => `${item.name} (x${item.quantity})`).join(", ");
*/





//darkmode

let header = document.querySelector("#header");
let darkLig = document.querySelector("#liD");
let theme = document.querySelector("#theme");
let page1 = document.querySelector("#page1");
let hC = document.querySelector("#cartA");

let mode = "light";
darkLig.addEventListener("click", () => {
    if (mode === "light" && darkLig.classList.contains("ri-contrast-2-line")) {
        page1.style.backgroundColor = "rgb(15 23 42)";
        header.style.backgroundColor = "rgb(15 23 42)";
        header.style.color = "white";
        hC.style.color = "white";
        theme.innerText = "Dark";
        darkLig.className = "ri-moon-fill";
        mode = "dark";
    } else {
        header.style.backgroundColor = "#EFF3EA"; 
        page1.style.backgroundColor = "#EFF3EA";
        header.style.color = "black";
        hC.style.color = "black"; 
        theme.innerText = "Light";
        darkLig.className = "ri-contrast-2-line";
        mode = "light";
    }
});

theme.addEventListener("click", () => {
    if (mode === "light" && darkLig.classList.contains("ri-contrast-2-line")) {
      page1.style.backgroundColor = "rgb(15 23 42)";
      header.style.backgroundColor = "rgb(15 23 42)";
      header.style.color = "white";
      hC.style.color = "white";
      theme.innerText = "Dark";
      darkLig.className = "ri-moon-fill";
      mode = "dark";
    } else {
      header.style.backgroundColor = "#EFF3EA"; 
      page1.style.backgroundColor = "#EFF3EA";
      header.style.color = "black"; 
      hC.style.color = "black";
      theme.innerText = "Light";
      darkLig.className = "ri-contrast-2-line";
      mode = "light";
    }
  });

  let removes = document.querySelectorAll(".rt");

  for(let remove of removes){
   remove.addEventListener("click",()=>{
      for(let card of cardCart){
         card.style.display = "none";
      }
   })
  }