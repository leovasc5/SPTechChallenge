function choose(obj){
    cardsBox.style.display = "none";
    startGame.style.display = "block";
    characterPhoto.src = characters[obj]['url_photo']

    character.nome = characters[obj]['nome'];
    character.desc = characters[obj]['desc'];
    character.hab = characters[obj]['hab'];
    character.url_photo = characters[obj]['url_photo'];

    characterSelected.innerHTML = `VOCÊ ESCOLHEU: "${(characters[obj]['nome']).toUpperCase()}"`
}

function choiceOther(){
    cardsBox.style.display = "block";
    startGame.style.display = "none";
}

function start(){
    startGame.style.display = "None";
    
    userImage.src = character.url_photo;
    userName.innerHTML = character.nome;

}