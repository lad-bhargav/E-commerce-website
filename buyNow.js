// product they are willing to buy

let products = {
    "buyI14.html": "iPhone 14",
    "buyI15.html": "iPhone 15",
    "buyi16.html": "iPhone 16",
    "buyi16pro.html": "iPhone 16 Pro"
};

document.addEventListener("DOMContentLoaded", () => {
    const referrer = document.referrer;
    const prodpur = document.querySelector("#prodpur");

    if (prodpur && referrer) {
        for (let file in products) {
            if (referrer.includes(file)) {
                prodpur.placeholder = products[file];
                break;
            }
        }
    }
});

//console.log(document.referrer);

//submit

/*let subt = document.getElementById("subt");
let details = document.getElementsByClassName("details");
let dets = document.querySelectorAll(".dets");

function displayBlock(){
        // Iterate over the details collection
        for (let i = 0; i < details.length; i++) {
          details[i].style.display = "none";
        }
}

const prodpur = document.querySelector("#prodpur");
let subCard = document.getElementById("subCard");

    subt.addEventListener("click",()=>{
            if(dets.value != ""){
                displayBlock();
                subt.style.display = "none";
                subCard.style.display = "flex";
                subCard.style.marginTop = "150px";
                subCard.style.marginLeft = "475px";
            }else{
                alert("Fill all information");
            }
    });*/

    const subt = document.getElementById("subt");
const dets = document.querySelectorAll(".dets");
const prodpur = document.querySelector("#prodpur");
let subCard = document.getElementById("subCard");

// Function to hide all `details` sections
function displayBlock() {
    let details = document.getElementsByClassName("details");
    for (let i = 0; i < details.length; i++) {
        details[i].style.display = "none";
    }
}

subt.addEventListener("click", () => {
    // Check if all `dets` fields have non-empty values
    let allFieldsFilled = Array.from(dets).every(input => input.value.trim() !== "");

    // Check if `prodpur` is empty
    let prodpurEmpty = prodpur && prodpur.value.trim() === "";

    if (allFieldsFilled && prodpurEmpty) {
        displayBlock();
        subt.style.display = "none";
        subCard.style.display = "flex";
        subCard.style.marginTop = "150px";
        subCard.style.marginLeft = "475px";
    } else {
        alert("Fill all information");
    }
});


    

