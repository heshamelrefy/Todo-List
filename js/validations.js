//// first name validation
function firstNameValidation(firstName){
    var regex = new RegExp(/^[A-Za-z]{3,}$/,"i");
    if(regex.test(firstName))
        return true;
    else{
        var error = new TypeError("first Name was not is the correct format");
        throw error;
    }
}
//// last name validation
function lastNameValidation(lastName){
    var regex = new RegExp(/^[A-Za-z]{3,}$/,"i");
    if(regex.test(lastName))
        return true;
    else{
        var error = new TypeError("last Name was not is the correct format");
        throw error;
    }
}
// // email validation
function emailValidation(email){
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(regex.test(email)){
        return true;
    } else{
        var error = new TypeError("Email was not is the correct format");
        throw error;
    }
} 

//// password validation
function passwordValidation(password){
    
    var regex = new RegExp(/^[0-9]{6,}$/);
    if(regex.test(password)){
        return true;
    } 
    else{
        var error = new TypeError("password was not is the correct format");
        throw error;
    }
}
////