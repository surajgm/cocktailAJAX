import fetchDrinks from "./fetchDrinks.js"
import displayDrinks from "./displayDrinks.js"
import setDrink from './setDrink.js'

const presentDrinks = async (url) => {
    // fetch drinks
    const data = await fetchDrinks(url);
    // console.log(data);

    // display drinks
    const section = await displayDrinks(data);
    // console.log(section);
    if (section) {
        setDrink(section);
    }
}

export default presentDrinks;