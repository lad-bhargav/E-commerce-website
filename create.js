//createAcc.html

let otpInp = document.querySelector("#OTP");
let submitNewAcc = document.querySelector("#crSub");
let otpBut = document.querySelector("#genOtp");
let newUser = document.querySelector("#newAcc");
let newPass = document.querySelector("#newPass");

let otpGen = null;


otpBut.addEventListener("click",()=>{
    setTimeout(()=>{
        otpGen = Math.floor(1000+Math.random()*1000);
        alert(`Your 4-digit OTP is ${otpGen}`);
    },300);
});

//store data
class User{
    constructor(susrname,sPassword){
    this.susrname = susrname;                      // s for store usrname & password
    this.sPassword = sPassword;
}
displayId(){
console.log(`username : ${this.susrname} \npassword : ${this.sPassword}`);
    }
 }

const storeData = [];

submitNewAcc.addEventListener("click",(data)=>{
    if(otpInp.value == otpGen && newUser.value != "" && newPass.value != ""){
        //window.location.href = "afterLog.html";
        //alert("complete");
        data.preventDefault();
        const enteredName = newUser.value;
        const enteredPass = newPass.value;

        const Userdata = new User(enteredName,enteredPass);
         storeData.push(Userdata);

        Userdata.displayId();

        console.table(storeData);
    }
    else if(otpInp.value != otpGen && newUser.value != "" && newPass.value != ""){
        alert("Enter valid OTP");
    }
    else if(otpInp.value == otpGen && newUser.value == "" && newPass.value != ""){
        alert("Enter a valid username");
    }
    else if(otpInp.value == otpGen && newUser.value != "" && newPass.value == ""){
        alert("Enter a valid password");
    }
    else if(otpInp.value === "" && newUser.value === "" && newPass.value === ""){
        alert("Fill all required information");
    }

    reset();
})

let reset=()=>{
        newUser.value = "";
        newPass.value = "";
        otpInp.value = "";
}
