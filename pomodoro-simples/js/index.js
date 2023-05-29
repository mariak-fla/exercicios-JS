import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
    playBtn,
    pauseBtn,
    stopBtn,
    setBtn,
    minutesDisplay,
    secondsDisplay,
    darkModeBtn,
    lightModeBtn,
    timerDisplay,
    bgColor,
    soundCards,
    svgs,
} from "./elements.js"

const controls = Controls({
    playBtn,
    pauseBtn,
    setBtn,
    stopBtn,
    darkModeBtn,
    lightModeBtn,
    timerDisplay,
    bgColor,
    soundCards,
    svgs,
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

const sound = Sound()

Events({controls, timer, sound})