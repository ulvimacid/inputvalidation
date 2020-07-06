let form= document.getElementById("form");
let username= document.getElementById("username");
let email= document.getElementById("email");
let password= document.getElementById("password");
let repassword= document.getElementById("repassword");

let validpassword="ulvi1995";


form.addEventListener("submit",function(e){
  
  checkInputs(e);

})

function checkInputs(e){
 let usernamevalue= username.value.trim();
 let emailvalue= email.value.trim();
 let passwordvalue= password.value.trim();
 let repasswordvalue= repassword.value.trim();

 if (usernamevalue=="") {
   
    setErrorFor(username,"Username cannot be blank")
    e.preventDefault();
 } 
 else{
    setSuccessFor(username)
 }


 //checking email
 if (emailvalue==="") {
     setErrorFor(email,"Email cannot be blank")
     e.preventDefault();
     
 }  else{
     setSuccessFor(email)
 }

 //checking password
 if (passwordvalue==="") {
   
    setErrorFor(password,"Password cannot be blank")
    e.preventDefault();
 } else if (passwordvalue.length<7) {
   
    setErrorFor(password,"Password must be greater than 6")
    e.preventDefault();
 }  else{
    setSuccessFor(password)
 }

 //checking password2
 
 if (repasswordvalue==="") {   
    setErrorFor(repassword,"Password cannot be blank")
    e.preventDefault();
 }  
    else if(repassword.value!=password.value){
        setErrorFor(repassword,"Passwords does not match")
        e.preventDefault();
    } else if(repassword.value!=validpassword){
        setErrorFor(repassword,"Invalid password")
        
    }   
    else{
        setSuccessFor(repassword)
    }

}
function setErrorFor(input,message){
  let formcontrol= input.parentElement;
  let small=formcontrol.querySelector("small");
  small.innerText=message;
  formcontrol.className="form-control error"
}

function setSuccessFor(input){
    let formcontrol= input.parentElement;
    formcontrol.className="form-control success";
  }

  

