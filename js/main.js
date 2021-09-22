window.addEventListener("load", () => {

    let btnMore = document.querySelector("#more");
    let card = document.querySelector(".card");
    let cardList = document.querySelector(".container.content");
    


    btnMore.onclick = (event) => {
        console.log(event);
        let newCard = document.createElement("div");
        newCard.classList = "card"
        newCard.innerHTML = card.innerHTML;
        cardList.insertBefore(newCard, btnMore);
    }

})