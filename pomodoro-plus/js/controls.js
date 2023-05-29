export default function Controls({
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
}) {
    function play() {
        playBtn.classList.add('hide')
        pauseBtn.classList.remove('hide')
        setBtn.classList.toggle('hide')
        stopBtn.classList.toggle('hide')
    }
    
    function pause() {
        playBtn.classList.remove('hide')
        pauseBtn.classList.add('hide')
    }

    function reset() {
        playBtn.classList.remove('hide')
        pauseBtn.classList.add('hide')
        setBtn.classList.remove('hide')
        stopBtn.classList.add('hide')
    }

    function getMinutes() {
        let newMinutes = prompt("Quantos minutos?")
        if (!newMinutes) {
            alert("Apenas números, mínimo de 1min.")
            return false
        } else if (0 >= newMinutes) {
            alert("Apenas números, mínimo de 1min.")
            return false
        }

        if (!isNaN(newMinutes)) {
            return newMinutes;
        } else {
            alert("Apenas números, mínimo de 1min.")
            return false
        }
    }

    function darkMode() {
        darkModeBtn.classList.toggle('hide')
        lightModeBtn.classList.toggle('hide')
        timerDisplay.style.color = "var(--dark-1)"
        bgColor.style.backgroundColor = "var(--dark-bg)"

        soundCards.forEach(function(soundCard) {
            soundCard.classList.toggle('lightmode')
            soundCard.classList.toggle('darkmode')
        });
        svgs.forEach(function(svg) {
            svg.style.setProperty('stroke', 'var(--dark-2)');
          });
    }

    function lightMode() {
        darkModeBtn.classList.toggle('hide')
        lightModeBtn.classList.toggle('hide')
        timerDisplay.style.color = "var(--light-1)"
        bgColor.style.backgroundColor = "var(--light-bg)"

        soundCards.forEach(function(soundCard) {
            soundCard.classList.toggle('lightmode')
            soundCard.classList.toggle('darkmode')
        });
        svgs.forEach(function(svg) {
            svg.style.setProperty('stroke', 'var(--light-2)');
        });
    }

    return {
        reset,
        play,
        pause,
        getMinutes,
        darkMode,
        lightMode
    }
}
