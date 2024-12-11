let urlPage = location.href
urlPage = urlPage.substring(0, urlPage.lastIndexOf("/"))

import { songsDb } from "./DbSongs.js";

export const audio = new Audio();


document.addEventListener("DOMContentLoaded", function() {
    let imageSong = document.getElementById("imageMusic");
    let titleSong = document.getElementById("title");
    let hours = document.getElementById("timeContainer");
    const nextMusic = document.getElementById("next-music")
    const backMusic = document.getElementById("back-music")
    const idStart = new URLSearchParams(window.location.search)
    let numProduction = parseInt(idStart.get("id"))
    
    function musicProduction(e) {
        let song = songsDb[e];
    
        if (song.PathMusic) {
            audio.src = song.PathMusic;
        } else {
            audio.src = "none"
        }
    
        if (song.PathImage) {
            imageSong.src = song.PathImage;
        } else {
            imageSong.src = ''; // colocar uma imagem de desconhecido dps
        }
    
        if (song.Name) {
            titleSong.innerText = song.Name;
        } else {
            titleSong.innerText = 'Desconhecido';
            titleSong.style.color = 'black'
        }
    
        if (song.BackgroundColor) {
            document.body.style.background = song.BackgroundColor;
        } else {
            document.body.style.background = 'none';
        }
    
        if (song.Color) {
            hours.style.textShadow = song.Color;
        } else {
            hours.style.textShadow = 'black';
        }
    
        audio.play()
    }
    
    
    
    musicProduction(numProduction);
    
    audio.addEventListener("ended", function () {
        numProduction += 1;
    
        if (numProduction != songsDb.length) {
            history.pushState({id:numProduction}, "", `?id=${numProduction}`)
            musicProduction(numProduction);
        } else {
            numProduction -= 1
        }
    });
    
    nextMusic.addEventListener("click", function () {
        if (numProduction != songsDb.length - 1) {
            numProduction += 1
            history.pushState({id:numProduction}, "", `?id=${numProduction}`)
            musicProduction(numProduction)
            songClicker()
        }
    })
    
    backMusic.addEventListener("click", function () {
        if (numProduction != 0) {
            numProduction -= 1
            history.pushState({id:numProduction}, "", `?id=${numProduction}`)
            musicProduction(numProduction)
            songClicker()
        } else {
            audio.currentTime = 0
        }
    })
})