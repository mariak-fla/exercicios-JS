export default function() {
    const btnPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const forestBgAudio = new Audio("https://github.com/mariak-fla/exercicios-JS/blob/main/pomodoro-plus/js/bgAudio/Floresta.wav?raw=true");
    forestBgAudio.loop = true
    const rainBgAudio = new Audio("https://github.com/mariak-fla/exercicios-JS/blob/main/pomodoro-plus/js/bgAudio/Chuva.wav?raw=true");
    rainBgAudio.loop = true
    const cafeBgAudio = new Audio("https://github.com/mariak-fla/exercicios-JS/blob/main/pomodoro-plus/js/bgAudio/Cafeteria.wav?raw=true");
    cafeBgAudio.loop = true
    const fireBgAudio = new Audio("https://github.com/mariak-fla/exercicios-JS/blob/main/pomodoro-plus/js/bgAudio/Lareira.wav?raw=true");
    fireBgAudio.loop = true
    
    let isPlaying = {
        forest: false,
        rain: false,
        fire: false,
        cafe: false
    };
    
    function pressBtn() {
        btnPressAudio.play()
    }

    function pomodoroEnd() {
        kitchenTimer.play()
    }

    function forestSound() {
        if (isPlaying.forest) {
            forestBgAudio.pause();
            isPlaying.forest = false;
        } else {
            pauseAllSounds();
            forestBgAudio.play();
            isPlaying.forest = true;
        }
    }

    function rainSound() {
        if (isPlaying.rain) {
            rainBgAudio.pause();
            isPlaying.rain = false;
        } else {
            pauseAllSounds();
            rainBgAudio.play();
            isPlaying.rain = true;
        }
    }

    function fireSound() {
        if (isPlaying.fire) {
            fireBgAudio.pause();
            isPlaying.fire = false;
        } else {
            pauseAllSounds();
            fireBgAudio.play();
            isPlaying.fire = true;
        }
    }

    function cafeSound() {
        if (isPlaying.cafe) {
            cafeBgAudio.pause();
            isPlaying.cafe = false;
        } else {
            pauseAllSounds();
            cafeBgAudio.play();
            isPlaying.cafe = true;
        }
    }

    function pauseAllSounds() {
        forestBgAudio.pause();
        rainBgAudio.pause();
        fireBgAudio.pause();
        cafeBgAudio.pause();
        isPlaying.forest = false;
        isPlaying.rain = false;
        isPlaying.fire = false;
        isPlaying.cafe = false;
    }

    function isPlayingAnySound() {
        return (
            isPlaying.forest ||
            isPlaying.rain ||
            isPlaying.fire ||
            isPlaying.cafe
        );
    }

    return {
        pressBtn,
        pomodoroEnd,
        forestSound,
        rainSound,
        cafeSound,
        fireSound,
        isPlayingAnySound,
        pauseAllSounds
    }
}