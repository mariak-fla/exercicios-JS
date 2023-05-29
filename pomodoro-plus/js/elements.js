const playBtn = document.querySelector('.play')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const setBtn = document.querySelector('.set')
const minusBtn = document.querySelector('button.minus')
const plusBtn = document.querySelector('button.plus')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const timerDisplay = document.querySelector('#timer')

const darkModeBtn = document.querySelector('button.dark')
const lightModeBtn = document.querySelector('button.light')

const forestBtn = document.querySelector('button#forest')
const rainBtn = document.querySelector('button#rain')
const cafeBtn = document.querySelector('button#cafe')
const fireBtn = document.querySelector('button#fire')

const bgColor = document.body
const svgs = document. querySelectorAll('svg')
var soundCards = document.querySelectorAll(".sound-card")

export {
    playBtn,
    pauseBtn,
    stopBtn,
    setBtn,
    darkModeBtn,
    lightModeBtn,
    minutesDisplay,
    secondsDisplay,
    forestBtn,
    rainBtn,
    cafeBtn,
    fireBtn,
    timerDisplay,
    bgColor,
    svgs,
    soundCards,
    minusBtn,
    plusBtn
}