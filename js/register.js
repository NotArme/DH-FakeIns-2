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
        if (!inpMail.value.includes("@")) {
            errorList.push("Insira um email válido");
        }
        if (inpName.value.length < 1) {
            errorList.push("Digite seu nome");
        }
        if (inpSurname.value.length < 1) {
            errorList.push("Digite seu sobrenome");
        }
        if (inpUser.value.length < 4) {
            errorList.push("Digite um nome de usuário com no mínimo 4 caracteres");
        }
        if (inpPass.value.length < 1) {
            errorList.push("Digite sua senha");
        }
        if (inpDate.value.length < 5) {
            errorList.push("Insira sua data de nascimento");
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
        }
        else {
            registerForm.submit()
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