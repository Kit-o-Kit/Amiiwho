import searchView from './views/searchView.js';
import model from './model.js';

const searches = ['amiiboSeries','character','gameSeries','name']


document.getElementById('searching').addEventListener('submit', (e) => {
    e.preventDefault();
    searchView.getQuery();
})