// import searchView from './views/searchView.js';
// import model from './model.js';
console.log("hi");

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let query = document.getElementById("searchField").value
    const data = `https://www.amiiboapi.com/api/amiibo/?character=${query}`
    const amiibo = fetch(data)
            .then((res) => res = res.json())
            .then((data) => {
                let list = ""
                for(d of data.amiibo){
                    let giveIt = `<ul>${d.name}, ${d.character}, ${d.amiiboSeries}</ul>`
                    list = list.concat('\n', giveIt)
                    document.getElementById("searched").innerHTML = list
                }
                
            })
    // searchView.getQuery();
})