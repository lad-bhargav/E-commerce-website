let card1 = document.querySelector(".card");
let card2 = document.querySelector(".card2");
let header = document.querySelector("#header");
let pg1Fet = document.querySelector("#fet1");
let pg2Fet = document.querySelector("#fet2");
let logo = document.querySelector("#logo");
let ok1 = document.querySelector("#ok1");
let ok2 = document.querySelector("#ok2");
let ok3 = document.querySelector("#ok3");
let ok4 = document.querySelector("#ok4");
let ok5 = document.querySelector("#ok5");
let darkLig = document.querySelector("#liD");
let theme = document.querySelector("#theme"); 
let page1 = document.querySelector("#page1");
let page2 = document.querySelector("#page2");
let carthd = document.querySelector("#cartA");

//load-timeout
logo.addEventListener("click", () => {
    setTimeout(() => {
        window.location.href = "afterLog.html";
    }, 700);
});

//darkmode

let mode = "light";
darkLig.addEventListener("click", () => {
    if (mode === "light" && darkLig.classList.contains("ri-contrast-2-line")) {
        header.style.backgroundColor = "rgb(15 23 42)";
        page1.style.backgroundColor = "rgb(15 23 42)";
        page2.style.backgroundColor = "rgb(15 23 42)";
        pg2Fet.style.backgroundColor = "rgb(30, 41, 59)";
        carthd.style.color = "white";
        ok1.style.color = "white";
        ok2.style.color = "white";
        ok3.style.color = "white";
        ok4.style.color = "white";
        ok5.style.color = "white";
        pg1Fet.style.color = "white";
        pg2Fet.style.color = "white";
        header.style.color = "white"; 
        mode = "dark";
        theme.innerText = "Dark";
        darkLig.className = "ri-moon-fill";
    } else {
        header.style.backgroundColor = "#EFF3EA";
        page1.style.backgroundColor = "#EFF3EA";
        page2.style.backgroundColor = "#EFF3EA";
        pg2Fet.style.backgroundColor = "#cacec6";
        card1.style.backgroundColor = "white";
        card2.style.backgroundColor = "white";
        carthd.style.color = "black";
        ok1.style.color = "black";
        ok2.style.color = "black";
        ok3.style.color = "black";
        ok4.style.color = "black";
        ok5.style.color = "black";
        pg2Fet.style.color = "black";
        pg1Fet.style.color = "black";
        header.style.color = "black"; 
        mode = "light";
        theme.innerText = "Light";
        darkLig.className = "ri-contrast-2-line";
    }
});

theme.addEventListener("click", function () {
    if (mode === "light" && darkLig.classList.contains("ri-contrast-2-line")) {
        header.style.backgroundColor = "rgb(15 23 42)";
        page1.style.backgroundColor = "rgb(15 23 42)";
        page2.style.backgroundColor = "rgb(15 23 42)";
        pg2Fet.style.backgroundColor = "rgb(30, 41, 59)";
        carthd.style.color = "white";
        ok1.style.color = "white";
        ok2.style.color = "white";
        ok3.style.color = "white";
        ok4.style.color = "white";
        ok5.style.color = "white";
        pg2Fet.style.color = "white";
        header.style.color = "white"; 
        pg1Fet.style.color = "white";
        mode = "dark";
        theme.innerText = "Dark";
        darkLig.className = "ri-moon-fill";
    } else {
        header.style.backgroundColor = "#EFF3EA";
        page1.style.backgroundColor = "#EFF3EA";
        page2.style.backgroundColor = "#EFF3EA";
        pg2Fet.style.backgroundColor = "#cacec6";
        card1.style.backgroundColor = "white";
        card2.style.backgroundColor = "white";
        carthd.style.color = "black";
        ok1.style.color = "black";
        ok2.style.color = "black";
        ok3.style.color = "black";
        ok4.style.color = "black";
        ok5.style.color = "black";
        pg2Fet.style.color = "black";
        pg1Fet.style.color = "black";
        header.style.color = "black"; 
        mode = "light";
        theme.innerText = "Light";
        darkLig.className = "ri-contrast-2-line";
    }
  })

  //SearchApis




