function createSearches(data) {
    let list = ""
    let i = 0
    for(d of data.amiibo){
        i++
        let giveIt = `<li id="suggest ${i}" >${d.name}, ${d.character}, ${d.amiiboSeries}</li>`
        list = list.concat('\n', giveIt)
    }
    document.getElementById("searched").innerHTML = list;
    addInteraction(data)
}
function addInteraction(data) {
    for(let j = 1; j <= data.amiibo.length; j++) {
        document.getElementById(`suggest ${j}`).addEventListener("click", (f) => {
        f.preventDefault()
        document.getElementById('searched').innerHTML = "";
        createAmiibo(data.amiibo[j-1])       
    })}
}

function createAmiibo(amiibo) {
    getPicture(amiibo);
    getInformation(amiibo);
    getUsage(amiibo);
}
function getPicture(amiibo) {
    document.getElementById('picture').innerHTML = `<img src="${amiibo.image}"></img>`
}
function getInformation(amiibo) {
    document.getElementById('information').innerHTML = 
    `<br><span class="highlighted">Amiibo : </span>${amiibo.name}</br>
    <br><span class="highlighted">Amiibo Series : </span>${amiibo.amiiboSeries}</br>
    <br><span class="highlighted">Character : </span>${amiibo.character}</br>
    <br><span class="highlighted">Game Series : </span>${amiibo.gameSeries}</br>
    <br><span class="highlighted">Release Date EU : </span>${amiibo.release.eu}</br>
    `;
}
function getUsage(amiibo) {
    document.getElementById("usage").innerHTML = 
    `<h2>Usage</h2>
    <div class="consoles" id="Switch">Switch</div>
    <div class="consoles" id="WiiU>WiiU</div>
    <div class="consoles" id="3DS">3DS</div>`;
    getSwitch(amiibo.gamesSwitch)
}
function getSwitch(gamesSwitch) {
    let gamees = ""
    if (gamesSwitch.length = 0) {
        gamees = "<div class='noGames'>Sadly this Amiibo has no use in any Switch Game</div>";
    } else {
        for(game of gamesSwitch) {

            
        }   
    }
}

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let query = document.getElementById("searchField").value
    const data = `https://www.amiiboapi.com/api/amiibo/?character=${query}&showusage`
    const amiibo = fetch(data)
            .then((res) => res = res.json())
            .then((data) => {
                createSearches(data)
            })
    // searchView.getQuery();
})
