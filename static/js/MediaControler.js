import { audio } from "./ControleDeReproducao.js";
import { urlPage } from "./url.js";


document.addEventListener('DOMContentLoaded', function () {
    const progressBar = document.getElementById('progress-bar');
    const progressContainer = document.getElementById('progress-container');
    const playMusic = document.getElementById("play");
    const dot = document.querySelector(".dot");
    const configIcon = document.getElementById("config-image");
    let repeatMusic = document.getElementById("replay")

    let deg = 0;
    let isDragging = false;

    if (audio.paused == true) {
        playMusic.src = `${urlPage}/assets/img/icons8-play-48.png`
    }

    audio.addEventListener("playing", function() {
        if (audio.paused == false) {
            playMusic.src = `${urlPage}/assets/img/icons8-pause-48.png`
        }
    })

    audio.addEventListener("ended", function() {
        if(audio.paused == true) {
            console.log("pausado")
            playMusic.src = `${urlPage}/assets/img/icons8-play-48.png`
        }
    })

    function songClicker() {
        let songClicker = new Audio();
        songClicker.volume = 0.2;
        songClicker.src = `${urlPage}/assets/audios/keypress.mp3`
        songClicker.play()
    }

    function girarEngrenagem() {
        deg = (deg + 180) % 360;
        configIcon.style.transform = `rotate(${deg}deg)`;
    }

    function atualizarRelogio() {
        const hourAndMinutes = document.getElementById("hours-and-minutes");
        const seconds = document.getElementById("seconds");
        const horaAtual = new Date();
        hourAndMinutes.innerText = horaAtual.toTimeString().slice(0, 5);
        seconds.innerText = horaAtual.getSeconds().toString().padStart(2, '0');
    }

    function updateProgress(e) {
        const rect = progressContainer.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newTime = (clickX / rect.width) * audio.duration;
        audio.currentTime = newTime;
        progressBar.style.width = (clickX / rect.width) * 100 + '%';
        dot.style.left = `calc(${(clickX / rect.width) * 100}% - 10px)`;
    }

    setInterval(girarEngrenagem, 1000);
    setInterval(atualizarRelogio, 1000);
    atualizarRelogio();

    audio.addEventListener('timeupdate', function () {
        const percentage = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${percentage}%`;
        dot.style.left = `calc(${percentage}% - 10px)`;
    });

    playMusic.addEventListener("click", function () {
        songClicker()

        if (audio.paused) {
            audio.play();
            playMusic.src = `${urlPage}/assets/img/icons8-pause-48.png`

        } else {
            audio.pause();
            playMusic.src = `${urlPage}/assets/img/icons8-play-48.png`
        }
    });

    progressContainer.addEventListener('click', updateProgress);

    progressContainer.addEventListener('mousedown', function (e) {
        isDragging = true;
        updateProgress(e);
    });

    document.addEventListener('mousemove', function (e) {
        if (isDragging) {
            updateProgress(e);
        }
    });

    document.addEventListener('mouseup', function () {
        isDragging = false;
    });

    repeatMusic.addEventListener("click", function () {
        songClicker()

        audio.loop = !audio.loop

        if (audio.loop == true) {
            repeatMusic.style.backgroundColor = "rgba(255, 255, 255, 0.171)"
        } else {
            repeatMusic.style.backgroundColor = "transparent"
        }
    })

    audio.volume = 1

    let lowVolume = document.getElementById("low-volume")
    let upperVolume = document.getElementById("voice")
    
    lowVolume.addEventListener("click", function () {
        songClicker()

        if (audio.volume < 0.2) {
            audio.volume = 0.1
        }

        audio.volume -= 0.1

        console.log("Volume em: " + audio.volume)
    })

    upperVolume.addEventListener("click", function () {
        songClicker()
        
        if (audio.volume > 0.9) {
            audio.volume = 0.9
        }

        audio.volume += 0.1
        console.log("Volume em: " + audio.volume)
    })

    //desabilitando eventos desnecessarios
    document.addEventListener("dragstart", event => {
        event.preventDefault()
    })

    document.addEventListener("drop", event => {
        event.preventDefault()
    })

    document.addEventListener("contextmenu", event => {
        event.preventDefault()
    })
});