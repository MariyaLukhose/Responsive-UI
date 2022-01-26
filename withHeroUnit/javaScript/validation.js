function cancel(){
    alert("Thank you. Returning to homePage");
    document.location.href="/";
}
function submit1(){
    var fname=document.SignupForm.fname;
    var lname=document.SignupForm.lname;
    var pwd= document.SignupForm.password;
    var repeatpwd=document.SignupForm.repeatpwd;
    console.log(fname);
    console.log(5);
    // if(fname.value==""){
    //     alert("First Name is required");
    //     fname.focus();
    //     return false;
    // }
    if(fname.value.length>15 ||fname.value.length<3){
        alert("First Name should have length bwtween 3 to 15, please change it");
        lname.focus();
        return false;
    }
    if(lname.value.length>15 ||lname.value.length<3){
        alert("Last Name should have length bwtween 3 to 15, please change it");
        fname.focus();
        return false;
    }
    if(pwd.length<8){
        alert("Password length required above 8.");
    }
    if(pwd!=repeatpwd){
        alert("Password did not match. \nPlease try again!");
    }

}
// function changeBackgoundImage(){
// document.body.style.backgroundImage=url("../images/bg1.jpg");
// }
// document.addEventListener("DOMContentLoaded",changeBackgoundImage());