function choose(obj) {
    cardsBox.style.display = "none";
    startGame.style.display = "block";
    characterPhoto.src = characters[obj]['url_photo']

    character.nome = characters[obj]['nome'];
    character.desc = characters[obj]['desc'];
    character.hab = characters[obj]['hab'];
    character.url_photo = characters[obj]['url_photo'];

    characterSelected.innerHTML = `VOCÊ ESCOLHEU: "${(characters[obj]['nome']).toUpperCase()}"`
}

function choiceOther() {
    cardsBox.style.display = "block";
    startGame.style.display = "none";
}

var timerOn = true;
var time = 900;

function fmtMSS(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s
}

function timedCount() {
    if (time == -1) {
        timerOn = 0;
        timer.innerHTML = "TEMPO<br>ESGOTADO"
    } else {
        timer.innerHTML = `TEMPO <br>${fmtMSS(time)}`;
        time--;
        setTimeout(timedCount, 1000);
    }
}

function startCount() {
    if (timerOn) {
        timedCount();
    }
}

function shuffleQuestions(array) {
    for (i = (array.length - 1); i > 0; i--) {
        rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]];
    }

    return array;
}

function shuffleAnswers(resp, options) {
    options.push(resp);
    for (j = (options.length - 1); j > 0; j--) {
        rand = Math.floor(Math.random() * (j + 1));
        [options[j], options[rand]] = [options[rand], options[j]];
    }

    return options;
}

var questions = shuffleQuestions(getQuestions());
var pontos = 0;
var questoesAntigas = [];

function skipQuestion(element) {
    questoesAntigas = document.getElementsByClassName(element.id.toString());
    for (o = 0; o <= (questoesAntigas.length - 1); o++) {
        questoesAntigas[o].style.display = 'none';
    }

    questions.shift();
    novaQuestao = document.getElementsByClassName(questions[0]['id'].toString());
    for (n = 0; n <= (novaQuestao.length - 1); n++) {
        novaQuestao[n].style.display = "";
    }
}

function reviewQuestion(element) {
    array_disable = document.getElementsByClassName(element.className);
    for (m = 0; m <= (array_disable.length - 1); m++) {
        array_disable[m].disabled = true;
    }
    array_disable[array_disable.length-1].disabled = false;

    for (l = 0; l <= (questions.length - 1); l++) {
        if (element.id == questions[l]['id']) {
            if (questions[l]['resp'] == element.textContent) {
                element.style.backgroundColor = "green";
                pontos += questions[l]['level'] * 25;
                points.innerHTML = pontos;
            } else {
                element.style.backgroundColor = "red";
                btns = document.getElementsByClassName(element.id.toString());
                for(p = 0; p <= (btns.length - 1); p++){
                    if (questions[l]['resp'] == btns[p].textContent) {
                        btns[p].style.backgroundColor = "green";
                        btns[p].style.opacity = "0.4";
                        btns[p].style.transition = 'all 0.5s ease-in';
                    }
                }
            }
        }
    }
}

function question() {
    for (i = 0; i <= (questions.length - 1); i++) {
        newDesc = document.createElement("span");
        newDesc.textContent = questions[i]['desc'];
        newDesc.setAttribute('class', questions[i]['id']);
        if (i != 0) {
            newDesc.setAttribute('style', 'display: none');
        }
        separator.appendChild(newDesc);

        options = shuffleAnswers(questions[i]['resp'], questions[i]['options']);

        for (k = 0; k <= (options.length - 1); k++) {
            newButton = document.createElement("button");
            newButton.textContent = options[k];
            newButton.setAttribute('id', questions[i]['id']);
            newButton.setAttribute('class', questions[i]['id']);
            newButton.setAttribute('onclick', 'reviewQuestion(this)');

            if (i != 0) {
                newButton.setAttribute('style', 'display: none');
            }
            answerButtons.appendChild(newButton);
        }
        newButtonContinue = document.createElement("button");
        newButtonContinue.setAttribute('id', questions[i]['id']);
        newButtonContinue.setAttribute('class', questions[i]['id']);
        newButtonContinue.setAttribute('onclick', 'skipQuestion(this)');
        newButtonContinue.setAttribute('disabled', 'true');
        newButtonContinue.textContent = "Continuar";

        if(i != 0){
            newButtonContinue.setAttribute('style', 'display: none');
        }
        continueButton.appendChild(newButtonContinue);
    }
}

function start() {
    startGame.style.display = "None";

    userImage.src = character.url_photo;
    userName.innerHTML = character.nome;

    timedCount();
    questionScreen.style.display = "block";
    question();
}