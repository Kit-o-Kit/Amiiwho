let bookmarks = []
let bookmarkNum = 0
function createSearches(data) {
    let list = ""
                let i = 0
                for(d of data.amiibo){
                    i++
                    let giveIt = `<li id="suggest ${i}" >${d.name}, ${d.character}, ${d.amiiboSeries}</li>`
                    list = list.concat('\n', giveIt)
                }
                document.getElementById("searched").innerHTML = list;
}
function makedaAmiibo(amiibo) {
    console.log(amiibo);
    getPicture(amiibo);
    getInformation(amiibo);
    // getUsage(amiibo);
}
function getPicture(amiibo) {
    document.getElementById('picture').innerHTML = `<img src="${amiibo.image}" class="picture"></img>`
}
function getInformation(amiibo) {
    document.getElementById('information').innerHTML = 
    `<br><span class="text">Amiibo : </span>${amiibo.name}</br>
    <br><span class="text">Amiibo Series : </span>${amiibo.amiiboSeries}</br>
    <br><span class="text">Character : </span>${amiibo.character}</br>
    <br><span class="text">Game Series : </span>${amiibo.gameSeries}</br>
    <br><span class="text">Release Date EU : </span>${amiibo.release.eu}</br>
    <input id="like" type="image" src="img/heart.png" class="heart"><span class="marked">Add to Bookmark</span>
    `;
    makeLikeFunction(amiibo)
} 
function makeLikeFunction(amiibo) {
    document.getElementById("like").addEventListener("click", (e) => {
        e.preventDefault();
        bookmarks = bookmarks.concat([[amiibo.tail, amiibo.name, amiibo.amiiboSeries]])
        console.log(bookmarks)
    })
}
// function getUsage(amiibo) {
//     document.getElementById("usage").innerHTML = 
//     `<br><b><span class="usage">Usage</span></b></br>
//     <br><span class="usage">Switch<div id="Switch"></div></span></br>
//     <br><span class="usage" id="WiiU">WiiU<div id="Switch"></div></div></br>
//     <br><span class="usage" id="3DS">3DS<div id="Switch"></div></span></br>`;
//     getSwitch(amiibo.gamesSwitch)
// }
// function getSwitch(gamesSwitch) {
//     if (gamesSwitch.length = 0) {
//         document.getElementById("Switch").innerHTML = "<div class='noGames'>Sadly this Amiibo has no use in any Switch Game</div>";
//     } else {
//         let gamees = ""
//         for(game of gamesSwitch) {
//             console.log("hello")
//             let usages = ""
//             for(uses of game.amiiboUsage) {
//                 usages.concat('', `<span class="text">${uses.Usage}</span>`)
//             }
//             gamees.concat('', 
//             `<div class='child' id='games'>${game.gameName}<div class="usages">${usages}</div></div>`)   
//         }
//         document.getElementById("Switch").innerHTML = gamees
//     }
// }
function removeEverything() {
    document.getElementById("searched").innerHTML = ""
    document.getElementById("information").innerHTML = ""
    document.getElementById("picture").innerHTML = ""
}
function sayhitoBookmarks() {
    let listOfBookmarks = ""
    for (let amiibo of bookmarks) {
        listOfBookmarks = listOfBookmarks.concat('\n',`<div class="text" id="bookmark-${amiibo[0]}">${amiibo[1]} | ${amiibo[2]}</div><div class="text" id="delete-${amiibo[0]}">X</div>`)
    }
    document.getElementById("bookmarked").innerHTML = listOfBookmarks
    document.getElementById("books").style.display = "block";
    giveInteractionBooks()
    makeDeletion()
}
function giveInteractionBooks() {
    for (let i=0; i <= bookmarks.length; i++) {
        try {
            document.getElementById(`bookmark-${bookmarks[i][0]}`).addEventListener("click", (e) => {
                e.preventDefault();
                console.log("are you there?")
                document.getElementById("bookmarked").innerHTML = ""
                const search = `https://www.amiiboapi.com/api/amiibo/?tail=${bookmarks[i][0]}`
                const amiibo = fetch(search)
                    .then((res) => res = res.json())
                    .then((data) => {
                        makedaAmiibo(data.amiibo[0])
                    })
            })
        } catch (err) {}
    }    
}
function makeDeletion() {
    for (let i = 0; i < bookmarks.length; i++) {
        bookmarkNum = i
        console.log(bookmarkNum)
        document.getElementById(`delete-${bookmarks[bookmarkNum][0]}`).addEventListener("click", (e) => {
            e.preventDefault();
            console.log(bookmarks)
            console.log(bookmarkNum)
            bookmarks = bookmarks.filter( bookmark => bookmark[0] == bookmarks[bookmarkNum][0])
            console.log(bookmarks)
        })
    }
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let query = document.getElementById("searchField").value
    const data = `https://www.amiiboapi.com/api/amiibo/?character=${query}`
    const amiibo = fetch(data)
            .then((res) => res = res.json())
            .then((data) => {
                createSearches(data)
                for(let j = 1; j <= data.amiibo.length; j++) {
                    document.getElementById(`suggest ${j}`).addEventListener("click", (f) => {
                    f.preventDefault()
                    document.getElementById('searched').innerHTML = "";
                    makedaAmiibo(data.amiibo[j-1])
                    
                })}
            })
})

document.getElementById("bookmark").addEventListener("click", (e) => {
    e.preventDefault()
    console.log("hi")
    removeEverything();
    sayhitoBookmarks();
})