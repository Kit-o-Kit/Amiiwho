function makedaAmiibo(amiibo) {
    document.getElementById('picture').innerHTML = `<img src="${amiibo.image}"></img>`
    document.getElementById('information').innerHTML = 
    `<span class="highlighted">Amiibo : </span>${amiibo.name}
    <span class="highlighted">Amiibo Series : </span>${amiibo.amiiboSeries}
    <span class="highlighted">Character : </span>${amiibo.character}
    <span class="highlighted">Game Series : </span>${amiibo.gameSeries}
    <span class="highlighted">Release Date EU : </span>${amiibo.release.eu}
    `;
    document.getElementById("usage").innerHTML = 
    `<h2>Usage</h2>
    <div class="consoles" id="Switch">Switch</div>
    <div class="consoles" id="WiiU>WiiU</div>
    <div class="consoles" id="3DS">3DS</div>`;
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
