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

        return newMinutes
    }

    return {
        reset,
        play,
        pause,
        getMinutes
    }
}
