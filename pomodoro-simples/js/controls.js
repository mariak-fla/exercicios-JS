export default function Controls({
    playBtn,
    pauseBtn,
    setBtn,
    stopBtn
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
            return false
        }
        
        let parsedMinutes = parseFloat(newMinutes);

        if (!isNaN(parsedMinutes)) {
            if (parsedMinutes % 1 !== 0) {
                return Math.floor(parsedMinutes) * 60 + Math.floor((parsedMinutes % 1) * 60);
            } else {
                return parsedMinutes * 60;
            }
        } else {
            return false;
        }
    }

    return {
        reset,
        play,
        pause,
        getMinutes
    }
}
