import { Modal } from './modal.js'
import { alertError } from './alert-error.js'
import { notNumber, IMC } from './util.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function(e) {
    e.preventDefault()

    var weight = inputWeight.value
    var height = inputHeight.value

    const weightOrHeightIsNaN = notNumber(weight) || notNumber(height)
    if (weightOrHeightIsNaN) {
        alertError.open()
        return;
    }

    alertError.close()

    const result = IMC(weight, height)
    displayResult(result)
}

function displayResult(result) {
    const message = `Seu IMC é de ${result}`
    
    Modal.open()
    Modal.message.innerText = message
}