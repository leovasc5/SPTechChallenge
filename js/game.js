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

var timerOn = true;
var time = 3;

function fmtMSS(s){
    return(s-(s%=60))/60+(9<s?':':':0')+s
}

function timedCount() {
    if(time == -1){
        timerOn = 0;
        timer.innerHTML = "TEMPO<br>ESGOTADO"
    }else{
        timer.innerHTML = `TEMPO <br>${fmtMSS(time)}`;
        time--;
        setTimeout(timedCount, 1000);
    }

    
}

function startCount() {
    if(timerOn) {
        timedCount();
    }
}

function getQuestionsToGame(){
    
}

function start(){
    startGame.style.display = "None";
    userImage.src = character.url_photo;
    userName.innerHTML = character.nome;
    timedCount();
}

