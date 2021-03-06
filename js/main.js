window.addEventListener("load", () => {

    let btnMore = document.querySelector("#more");
    let card = document.querySelector(".card");
    let cardList = document.querySelector(".container.content");
    let cardTemplate = card.cloneNode(true);
    let likeDiv = document.querySelectorAll(".likes");
    let likeBtn = document.querySelectorAll(".likes img");
    let likeCount = document.querySelectorAll(".like-count");
    updtLikeList();

    
    

    btnMore.onclick = (event) => {
        console.log(event);
        
        let newCard = cardTemplate.cloneNode(true);
        cardList.insertBefore(newCard, btnMore);

        updtLikeList();
    }

    // Hover stuff

    let srchBar = document.querySelector(".busca")

    srchBar.onmouseover = (event) => {
        srchBar.style.boxShadow = "0px 1px 3px black";
    }
    srchBar.onmouseout = (event) => {
        srchBar.style.boxShadow = "0px 0px 0px";
        console.log("a")
    }

    btnMore.style.cursor = "pointer"

})



//this function updates the likes array everytime a new card appears
function updtLikeList() {
    likeDiv = document.querySelectorAll(".likes");
    likeBtn = document.querySelectorAll(".likes img");
    likeCount = document.querySelectorAll(".like-count");
    console.log("updated");

    for (let i in likeBtn) {
        likeBtn[i].onclick = (event) => {
            likePressed(i)
        }
    }
};


function likePressed(cardn) {
    likeDiv[cardn].classList.toggle("liked")
    if (likeDiv[cardn].classList.contains("liked")) {
        likeDiv[cardn].childNodes[1].src = "img/red-heart.png";
        likeCount[cardn].innerText = parseInt(likeCount[cardn].innerText) + 1
    }
    else {
        likeDiv[cardn].childNodes[1].src = "img/icons/heart.svg";
        likeCount[cardn].innerText = parseInt(likeCount[cardn].innerText) - 1
    }
    
}