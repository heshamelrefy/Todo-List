document.getElementById("email").onblur = function(){
    try{
        emailValidation(this.value);
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        this.nextElementSibling.innerText = "";
    }
    catch(e){
        this.classList.remove("is-valid");
        this.classList.add("is-invalid");
        this.nextElementSibling.innerText = e.message;
    }
}

document.getElementById("password").onblur = function(){
    try{
        console.log(this.value);
        passwordValidation(this.value);
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        this.nextElementSibling.innerText = "";
    }
    catch(e){
        this.classList.remove("is-valid");
        this.classList.add("is-invalid");
        this.nextElementSibling.innerText = e.message;
    }
}


let emailExist= document.getElementById("emailExist")
document.forms[0].addEventListener("submit",(e)=>{
    e.preventDefault()
    let email=document.getElementById("email")
    let password =document.getElementById("password")
    let formData={}
    console.log(formData);
   let users= JSON.parse(localStorage.getItem("users")) || []
   let isExist=false
    users.forEach(user => {
        if (user.email == email.value&&user.password == password.value) {
            isExist=true
            formData=user
        }
    });
    if (isExist) {
        // show error message
        emailExist.innerHTML=''
        localStorage.setItem("currentUser",JSON.stringify(formData))
        window.location.href='todoList.html'
    }
    else
    {
        emailExist.innerHTML='Email or Password is incorrect'
    }
    
})