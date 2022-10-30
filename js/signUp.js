document.getElementById("firstName").onblur = function(){
    try{
        firstNameValidation(this.value);
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
document.getElementById("lastName").onblur = function(){
    try{
        lastNameValidation(this.value);
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
    let firstName=document.getElementById("firstName")
    let lastName=document.getElementById("lastName")
    let email=document.getElementById("email")
    let password =document.getElementById("password")
    let formData={
        firstName:firstName.value,
        lastName:lastName.value,
        email:email.value,
        password:password.value
    }
    console.log(formData);
   let users= JSON.parse(localStorage.getItem("users")) || []
   let isExist=false
    users.forEach(user => {
        if (user.email == formData.email) {
            isExist=true
        }
    });
    if (isExist) {
        // show error message
        emailExist.innerHTML='Email is already registered'
    }
    else
    {
        users.push(formData)
        localStorage.setItem("users",JSON.stringify(users))
        emailExist.innerHTML=''
        localStorage.setItem("currentUser",JSON.stringify(formData))
        window.location.href='todoList.html'
    }
    
})