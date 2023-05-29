import { 
    playBtn, 
    pauseBtn, 
    stopBtn, 
    setBtn, 
    darkModeBtn,
    lightModeBtn,
    soundCards,
    forestBtn,
    rainBtn,
    cafeBtn,
    fireBtn,
    minusBtn,
    plusBtn,
    minutesDisplay
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

    plusBtn.addEventListener('click', () => {
        const currentMinutes = Number(minutesDisplay.textContent)
        const newMinutes = currentMinutes + 5
        timer.updateMinutes(newMinutes)
        timer.updateDisplay(newMinutes)
    })
    
    minusBtn.addEventListener('click', () => {
        const currentMinutes = Number(minutesDisplay.textContent)
        const newMinutes = Math.max(currentMinutes - 5, 0)
        timer.updateMinutes(newMinutes)
        timer.updateDisplay(newMinutes)
    })
    
    darkModeBtn.addEventListener('click', () => {
        controls.darkMode();
        sound.pressBtn();
    })

    lightModeBtn.addEventListener('click', () => {
        controls.lightMode();
        sound.pressBtn();
    })

    forestBtn.addEventListener('click', () => {
        if (sound.isPlayingAnySound()) {
            sound.pauseAllSounds();
        }
        sound.forestSound();
        updateButtonBackground(forestBtn);
    })
    
    rainBtn.addEventListener('click', () => {
        if (sound.isPlayingAnySound()) {
            sound.pauseAllSounds();
        }
        sound.rainSound();
        updateButtonBackground(rainBtn);
    })
    
    cafeBtn.addEventListener('click', () => {
        if (sound.isPlayingAnySound()) {
            sound.pauseAllSounds();
        }
        sound.cafeSound();
        updateButtonBackground(cafeBtn);
    })
    
    fireBtn.addEventListener('click', () => {
        if (sound.isPlayingAnySound()) {
            sound.pauseAllSounds();
        }
        sound.fireSound();
        updateButtonBackground(fireBtn);
    })

    function updateButtonBackground(selectedButton) {
        soundCards.forEach((card) => {
            card.classList.remove('selected');
        });
        selectedButton.parentNode.classList.add('selected');
    }
}