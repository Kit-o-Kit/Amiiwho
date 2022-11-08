export class model {
    getLyrics(artist, title) { 
        return fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    }
}