document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("email_or_phone")
    const dddMenu = document.getElementById("ddd-menu")
    const btnNext = document.getElementById("btn-next")
    let alertDiv = document.getElementById("invalid-alert")
    let alertDivBorder = document.querySelector(".create-input")
    let isValidValue = false

    //Função que verifica se é numero ou email  
    inputField.addEventListener("input", function () {
        let value = inputField.value.replace(/\D/g, '')

         // Aplica a máscara: "11 99227 1149"
        if (/^\d+$/.test(value)) {
            if (value.length <= 2) {
                value = value.replace(/(\d{0,2})/, '$1'); // Apenas os dois primeiros dígitos (DDD)
            } else if (value.length <= 7) {
                value = value.replace(/(\d{2})(\d{0,5})/, '$1 $2'); // DDD + espaço após o DDD
            } else {
                value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '$1 $2 $3'); // Formato final
            }
            inputField.value = value; // Atualiza o valor do campo com a formatação

            dddMenu.style.display = "block";
            positionMenu(dddMenu);
            inputField.type = "tel"; // Ajusta para telefone
            isValidValue = IsNumberValid(value.replace(/\D/g, '')); // Passa somente números para validação
        } else {
            dddMenu.style.display = "none";
            inputField.type = "email"; // Ajusta para e-mail
            isValidValue = IsEmailValid(inputField.value.trim());
            inputField.style.paddingLeft = '0px';
        }

        updateStyles(); // A função é chamada toda vez que o conteúdo do campo muda.
    });

    inputField.addEventListener("blur", function () { //Este evento é disparado quando o usuário sai do campo de entrada (perde o foco).
        updateStyles(); //A função é chamada para garantir que o estilo do alerta seja atualizado, mesmo que o usuário tenha saído do campo.
    });
    
    // Essa função verifica a validade do valor inserido no campo
    function updateStyles() { 
        if (!isValidValue) {
            alertDiv.innerText = "E-mail ou número de telefone inválido"
            alertDiv.style.color = "rgb(239, 67, 35)"
            alertDivBorder.classList.add("invalid")
        } else {
            alertDiv.innerText = "E-mail ou Número de Telefone"
            alertDiv.style.color = "white"
            alertDivBorder.classList.remove("invalid")
        }
    }

    function IsNumberValid(number) {
        if (number.length == 11) {
            configureButtonActive()
            return true;
        } else {
            configureButtonInactive()
            return false;
        }
    }

    function positionMenu(menu) {
        inputField.style.paddingLeft = "90px"
        menu.style.position = "absolute"
        menu.style.marginLeft = `0px`
        menu.style.top = `24px` // Posiciona acima do input
    }

    function IsEmailValid(email) {
        if (email.includes("@") && email.includes(".")) {
            const parts = email.split(".")
            const lastPart = parts[parts.length - 1]
            const isLettersOnly = /^[a-zA-Z]+$/.test(lastPart)

            if (lastPart.length >= 2 && isLettersOnly) {
                configureButtonActive()
                return true;
            } else {
                configureButtonInactive()
            }
        }
        return false;
    }

    function configureButtonActive() {
        if (!btnNext.classList.contains("valid")) {
            btnNext.classList.add("valid")
            btnNext.disabled = false
        }
    }

    function configureButtonInactive() {

        if (btnNext.classList.contains("valid")) {
            btnNext.classList.remove("valid")
            btnNext.disabled = true
        }
    }

    function btnNext() {
        alert('oi')
    }
});