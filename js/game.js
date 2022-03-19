function choose(obj){
    cardsBox.style.display = "none";
    startGame.style.display = "block";
    characterPhoto.src = characters[obj]['url_photo']
    characterSelected.innerHTML = `VOCÊ ESCOLHEU: "${(characters[obj]['nome']).toUpperCase()}"`
}

function start(){
    startGame.style.display = "None";
}