document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("email_or_phone")
    const dddMenu = document.getElementById("ddd-menu")
    const dropdownMenu = document.getElementById("dropdown-ddd")
    const btnNext = document.getElementById("btn-next")
    let alertDiv = document.getElementById("invalid-alert")
    let isValidValue = false

    inputField.addEventListener("input", function () {
        const value = inputField.value

        // Verifica se é o primeiro número digitado
        if (/^\d+$/.test(value)) {
            dddMenu.style.display = "block";
            positionMenu(dddMenu, inputField);
            inputField.type = "tel" // Ajusta para telefone
            isValidValue = IsNumberValid(value)
        } else {
            dddMenu.style.display = "none";
            inputField.type = "email" // Ajusta para e-mail
            isValidValue = IsEmailValid(value)
            inputField.style.paddingLeft = '0px'
        }

        if (!isValidValue) {
            alertDiv.innerText = "E-mail ou número de telefone inválido"
            alertDiv.style.color = "rgb(255, 100, 10)"
            alertDiv.style.marginLeft = "-10px"
        }
        else {
            alertDiv.innerText = "E-mail ou Número de Telefone"
            alertDiv.style.color = "white"
            alertDiv.style.marginLeft = "0"
        }
    });

    function IsNumberValid(number) {
        if (number.length == 11) {
            btnNext.style.backgroundColor = "rgb(255, 100, 10)"
            btnNext.style.borderColor = "rgb(255, 100, 10)"
            btnNext.style.color = "black"

            btnNext.addEventListener("mouseenter", () => {
                btnNext.style.backgroundColor = "rgb(255, 120, 20)"; // Cor mais clara ao passar o mouse
            });

            btnNext.addEventListener("mouseleave", () => {
                btnNext.style.backgroundColor = "rgb(255, 100, 10)"; // Volta para a cor original
            });
            
            return true;
        } else {
            btnNext.style.backgroundColor = "transparent"
            btnNext.style.borderColor = "rgb(89, 89, 91)"
            btnNext.style.color = "rgb(89, 89, 91)"
        }
        return false
    }

    function positionMenu(menu, input) {
        input.style.paddingLeft = '90px'
        menu.style.position = "absolute";
        menu.style.marginLeft = `0px`; 
        menu.style.top = `24px`; // Posiciona acima do input
    }
    
    function IsEmailValid(email) {
        if (email.includes("@") && email.includes(".")) {
            const parts = email.split(".")
            const lastPart = parts[parts.length - 1]
            const isLettersOnly = /^[a-zA-Z]+$/.test(lastPart);

            if (lastPart.length >= 2 && isLettersOnly) {
                btnNext.style.backgroundColor = "rgb(255, 100, 10)"
                btnNext.style.borderColor = "rgb(255, 100, 10)"
                btnNext.style.color = "black"

                btnNext.addEventListener("mouseenter", () => {
                    btnNext.style.backgroundColor = "rgb(255, 120, 20)"; // Cor mais clara ao passar o mouse
                });
    
                btnNext.addEventListener("mouseleave", () => {
                    btnNext.style.backgroundColor = "rgb(255, 100, 10)"; // Volta para a cor original
                });

                return true;
            } else {
                btnNext.style.backgroundColor = "transparent"
                btnNext.style.borderColor = "rgb(89, 89, 91)"
                btnNext.style.color = "rgb(89, 89, 91)"
            }
        } 
        return false
    }
});