
//darkmode

let header = document.querySelector("#header");
let darkLig = document.querySelector("#liD");
let theme = document.querySelector("#theme");
let page1 = document.querySelector("#page1");
let hC = document.querySelector("#cartA");

let mode = "dark";
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

document.addEventListener("DOMContentLoaded", function () {
    let card1 = document.querySelector("#card1b");
    let card2 = document.querySelector("#card2b");
    let card3 = document.querySelector("#card3b");
    let card4 = document.querySelector("#card4b");
    let hideButton = document.querySelector(".rt");

    // Check if button was clicked in previous page
    if (localStorage.getItem("buttonClicked") === "true") {
        card1.style.visibility = "visible"; // Show element
    }

    // Hide when clicking "Remove from Cart"
    if (hideButton) {
        hideButton.addEventListener("click", function () {
            card1.style.visibility = "hidden";
            localStorage.removeItem("buttonClicked"); // Reset state
        });
    }
});



