const setDrink = (section) => {
    section.addEventListener('click', function (e) {
        // e.preventDefault();
        // temporarily setting up preventDefault to see the functionality we are setting up before navigating to the link
        const id = e.target.parentElement.dataset.id;
        // console.log(id);
        localStorage.setItem('drink', id);
        // simple string so no JSON.stringify and JSON.parse which is used for array and objects
    })
}

export default setDrink;