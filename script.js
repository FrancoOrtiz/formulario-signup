const $submit = document.getElementById("submit");
const $form = document.getElementById("form");
const $inputName = document.getElementById("input-name");
const $inputLastName = document.getElementById("input-lastname");
const $inputEmail = document.getElementById("input-email");
const $inputPassword = document.getElementById("input-password");

const $spanName= document.getElementById("span-name");
const $spanLastName= document.getElementById("span-lastname");
const $spanEmail= document.getElementById("span-email");
const $spanPassword= document.getElementById("span-password");

let nameAccept = false;
let lastNameAccept = false;
let emailAccept = false;
let passwordAccept = false;

$submit.addEventListener("click", ()=> {
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i;
    const nameRegex = /^[a-z0-9_-]{3,16}$/;
    const lastNameRegex = /^[a-z0-9_-]{3,16}$/;
    const passwordRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;

    let name = $inputName.value;
    let lastName = $inputLastName.value;
    let email = $inputEmail.value;
    let password = $inputPassword.value;

    if(nameRegex.test(name)){
        nameAccept = true;
        $spanName.classList.remove("error-opacity");
    }else{
        $spanName.classList.add("error-opacity");
    }
    
    if(lastNameRegex.test(lastName)){
        lastNameAccept = true;
        $spanLastName.classList.remove("error-opacity");
    }else{
        $spanLastName.classList.add("error-opacity");
    }
    
    if(emailRegex.test(email)){
        emailAccept = true;
        $spanEmail.classList.remove("error-opacity");
    }else{
        $spanEmail.classList.add("error-opacity");
    }

    if(passwordRegex.test(password)){
        passwordAccept = true;
        $spanPassword.classList.remove("error-opacity");
    }else{
        $spanPassword.classList.add("error-opacity");
    }

})


$form.addEventListener("submit", (e)=>{
    if(nameAccept && lastNameAccept && emailAccept && passwordAccept){
    }else{
        e.preventDefault();
    }

})