import { songsDb } from "./DbSongs.js"
import { urlPage } from "./url.js"

document.addEventListener("DOMContentLoaded", function() {

    const listMusic = document.getElementById("list-music")
    
    songsDb.map((music) => {
        let cardMusic = document.createElement("div")
        cardMusic.classList.add("card-music")
        cardMusic.id = music.Id
        cardMusic.style.backgroundImage = `url(${music.PathImage})`
        listMusic.appendChild(cardMusic)

        document.getElementById(`${music.Id}`).addEventListener("click", function() {
            window.location.href = `/ProductionMusic.html?id=${music.Id}`
        })
    })
})


