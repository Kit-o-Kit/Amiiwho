class model {
    getAmiibo(criteria, searchTerm) {
        const data = `https://www.amiiboapi.com/api/amiibo/?${criteria}=${searchTerm}`
        const amiibo = fetch(data)
            .then((res) => res = res.json())
            .then((d) => {
              console.log(d)  
            })
    }
}

export default new model();