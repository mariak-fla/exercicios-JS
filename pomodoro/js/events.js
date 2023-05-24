import { 
    playBtn, 
    pauseBtn, 
    stopBtn, 
    setBtn, 
    soundOnBtn, 
    soundOffBtn 
} from "./elements.js"


export default function({controls, timer, sound}) {
    playBtn.addEventListener('click', () => {
        controls.play()
        timer.countdown()
        sound.pressBtn()
    })
    
    pauseBtn.addEventListener('click', () => {
        controls.pause()
        timer.hold()
        sound.pressBtn()
    })
    
    stopBtn.addEventListener('click', () => {
        controls.reset()
        timer.reset()
        sound.pressBtn()
    })
    
    setBtn.addEventListener('click', () => {
        let newMinutes = controls.getMinutes()
        if (!newMinutes) {
            timer.reset()
            return
        }
    
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
    })
    
    soundOnBtn.addEventListener('click', () => {
        soundOnBtn.classList.toggle('hide')
        soundOffBtn.classList.toggle('hide')
    
        sound.bgAudio.pause()
    })
    
    soundOffBtn.addEventListener('click', () => {
        soundOnBtn.classList.toggle('hide')
        soundOffBtn.classList.toggle('hide')
        
        sound.bgAudio.play()
    })
}