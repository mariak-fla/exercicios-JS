// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1


//eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterReset)


// funções callback
function handleTryClick(e) {
    e.preventDefault();
    const inputNumber = document.getElementById("inputNumber").value;

    if(Number(inputNumber) == randomNumber) {
        toggleScreen()

        document.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativa(s)!`
    } else if (0 > Number(inputNumber) || Number(inputNumber) > 10) {
        alert("Não é possível chutar este número!")
    }
    
    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function enterReset(event) {
    if(event.key == 'Enter' && screen1.classList.contains("hide")) {
        handleResetClick()
    }
}