import get from './getElement.js'
import presentDrinks from './presentDrinks.js'

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

// const form = get('.search-form')
const form = get('[class ="search-form"]');
// get me the attribute that has the name of drink with attribute selector
const input = get('[name ="drink"]')

form.addEventListener('keyup', function (e) {
    e.preventDefault();
    const value = input.value;
    if(!value) return;
    presentDrinks(`${baseURL}${value}`)
})

