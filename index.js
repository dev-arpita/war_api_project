/**
 * Challenge: Define our anonymous callback function as a separate function, then
 * pass it as the 2nd parameter to our `addEventListener`
 */

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => console.log(data))
}

document.getElementById("new-deck").addEventListener("click", handleClick)
    //above code, copy the variable & callback function calls when button clicked

// document.getElementById("new-deck").addEventListener("click", handleClick())
    //above code, just call the function & return value whithout click event
