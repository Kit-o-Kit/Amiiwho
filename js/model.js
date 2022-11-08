class model {
    getAmiibo(criteria, searchTerm) {
        const data = `https://www.amiiboapi.com/api/amiibo/?${criteria}=${searchTerm}`
        const amiibo = fetch(data, 
            )
        return amiibo
    }
}

export default new model();