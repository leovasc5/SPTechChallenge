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
var time = 900;

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

function shuffleQuestions(array){
    for(i=(array.length-1); i>0; i--){
        rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]];
    }

    return array;
}

function shuffleAnswers(resp, options){
    options.push(resp);

    // console.log(array)
    for(j=(options.length-1); j>0; j--){
        rand = Math.floor(Math.random() * (j + 1));
        [options[j], options[rand]] = [options[rand], options[j]];
    }

    return options;
}

var questions = shuffleQuestions(getQuestions());
var pontos = 0;

function reviewQuestion(element){
    for(l=0; l<=(questions.length-1); l++){
        if(element.id == questions[l]['id']){
            if(questions[l]['resp'] == element.textContent){
                element.style.backgroundColor = 'green';
                pontos += questions[l]['level'] * 25;
                points.innerHTML = pontos;
            }
        }
    }
}

function question(){
    newDesc = document.createElement("span");

    // for(i=0; i<=(questions.length-1); i++){ Correto
    for(i=0; i<=0; i++){ //Teste
        newDesc.textContent = questions[i]['desc'];
        separator.appendChild(newDesc);
        options = shuffleAnswers(questions[i]['resp'], questions[i]['options']);
        
        for(k=0; k<=(options.length-1); k++){
            newButton = document.createElement("button");
            newButton.textContent = options[k];
            newButton.setAttribute('id', questions[i]['id']);
            newButton.setAttribute('onclick', 'reviewQuestion(this)');
            
            answerButtons.appendChild(newButton);
        }
    }
    
}

function start(){
    startGame.style.display = "None";

    userImage.src = character.url_photo;
    userName.innerHTML = character.nome;

    timedCount();
    questionScreen.style.display = "block";
    question();
}