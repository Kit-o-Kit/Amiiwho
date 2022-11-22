function makedaAmiibo(amiibo) {
    getPicture(amiibo);
    getInformation(amiibo);
    getUsage(amiibo);
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
    `;
}
function getUsage(amiibo) {
    document.getElementById("usage").innerHTML = 
    `<br><b><span class="usage usage-title">Usage</span></b></br>
    <br><span class="usage" id="Switch">Switch</span></br>
    <br><span class="usage" id="WiiU>WiiU</div></br>
    <br><span class="usage" id="3DS">3DS</span></br>`;
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
                let list = ""
                let i = 0
                for(d of data.amiibo){
                    i++
                    let giveIt = `<li id="suggest ${i}" >${d.name}, ${d.character}, ${d.amiiboSeries}</li>`
                    list = list.concat('\n', giveIt)
                }
                document.getElementById("searched").innerHTML = list;
                for(let j = 1; j <= data.amiibo.length; j++) {
                    document.getElementById(`suggest ${j}`).addEventListener("click", (f) => {
                    f.preventDefault()
                    document.getElementById('searched').innerHTML = "";
                    makedaAmiibo(data.amiibo[j-1])
                    
                })}
            })
    // searchView.getQuery();
})
