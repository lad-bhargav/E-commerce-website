//index.html

let inputUser = document.querySelector("#in-user");
let inputPass = document.querySelector("#in-pass");
let submit = document.getElementById("login");
let username = "LadBhargav";
let Password = "12345678";



submit.addEventListener("click",()=>{
    if(inputUser.value === "" && inputPass.value === ""){
        alert("Enter username and password");
    }
    else if(inputUser.value === ""){
        alert("please enter username");
    }
    else if(inputPass.value === ""){
        alert("please enter Password");
    }
    else if(inputUser.value === username && inputPass.value === Password){
        window.location.href = "afterLog.html";
    }
    else{
        alert("please enter valid username and password");
    }
})


