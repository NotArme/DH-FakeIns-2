let inpMail;
let inpName;
let inpSurname;
let inpUser;
let inpPass;
let inpDate;
let btnRegister;
let registerForm;

window.addEventListener("load", () => {

    inpMail = document.getElementsByName("email")[0];
    inpName = document.getElementsByName("name")[0];
    inpSurname = document.getElementsByName("surname")[0];
    inpUser = document.getElementsByName("username")[0];
    inpPass = document.getElementsByName("password")[0];
    registerForm = document.querySelector("form.form-auth");
    btnRegister = document.querySelector("form button");

    createDateInp()

    errorElement = document.createElement("ul");
    errorElement.style.padding = "0px"
    registerForm.insertBefore(errorElement, document.querySelector('form.form-auth p'))

    btnRegister.onclick = (event) => {
        event.preventDefault();

        console.log("cliquei")

        errorElement.innerHTML = "";
        errorList = [];

        // validations
        if (!inpMail.value.includes("@") || inpMail.value.length <= 180 && inpMail.value.length >= 10) {
            errorList.push("Insira um email válido");
        }
        if (inpName.value.length >= 80 || inpName.value.length <= 2) {
            console.log('a')
            errorList.push("Digite seu nome");
        }
        if (inpSurname.value.length >= 100 || inpSurname.value.length <= 2) {
            errorList.push("Digite seu sobrenome");
        }
        if (inpUser.value.length >= 15 || inpUser.value.length <= 10) {
            errorList.push("Seu nome de usuário deve ter entre 10 e 15 caracteres");
        }
        if (inpPass.value.length >= 100 || inpPass.value.length <= 8) {
            errorList.push("Sua senha deve ter no minimo 8 caracteres");
        }
        if (inpDate.valueAsDate != null) {
            yearBirth = inpDate.valueAsDate.getFullYear();
            currAge = (new Date().getFullYear()) - yearBirth
            if (currAge >= 120 || currAge <= 16) {
                errorList.push("Você deve ter mais de 16 anos");
            }
        } else {
            errorList.push("Insira uma data de nascimento válida")
        }




        // display errors or submit
        if (errorList.length > 0) {
            errorList.forEach(errormsg => {
                errorElement.innerHTML += "<li>" + errormsg + "</li>"
            })
            liElements = document.querySelectorAll("form.form-auth ul li")
            liElements.forEach(element => {
                element.style.color = "#aaaaaa"
                element.style.margin = "0.3rem"
                element.style.listStyleType = "none"
            });
        } else {
            //registerForm.submit()
        }


    }





})

function createDateInp() {
    inpDate = document.createElement("input");
    inpDate.type = "date";
    inpDate.name = "date";
    inpDate.placeholder = "Data de nascimento";
    registerForm.insertBefore(inpDate, btnRegister);
}