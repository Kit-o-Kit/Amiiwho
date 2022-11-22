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
                let i = 0
                for(d of data.amiibo){
                    i++
                    let giveIt = `<li id="suggest ${i}" >${d.name}, ${d.character}, ${d.amiiboSeries}</li>`
                    list = list.concat('\n', giveIt)
                    console.log(list)
                }
                document.getElementById("searched").innerHTML = list;
                for(let j = 1; j <= data.amiibo.length; j++) {
                    document.getElementById(`suggest ${j}`).addEventListener("click", (f) => {
                    
                })}
            })
    // searchView.getQuery();
})
