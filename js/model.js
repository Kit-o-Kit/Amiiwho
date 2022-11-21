class model {
    getAmiibo(searchTerm) {
        const data = `https://www.amiiboapi.com/api/amiibo/?name=${searchTerm}`
        const amiibo = fetch(data)
            .then((res) => res = res.json())
            .then((d) => {
              console.log(d)  
            })
    }
}

export default new model();