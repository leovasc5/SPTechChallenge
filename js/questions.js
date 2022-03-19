const materias = ["Arquitetura Computacional", "Algoritmos", "Pesquisa & Inovação", "Tecnologia da Informação", "Banco de Dados"];

const q1 = {
    mat: materias[0],
    desc: "Converta o número 10 para a base binária",
    resp: "0101",
    options: ["1011", "10", "11", "0110"],
    level: 1
}

const q2 = {
    mat: materias[0],
    desc: "Foram ensinadas as bases...",
    resp: "Binárias, Octais, Deimais e Hexadecimais",
    options: ["Binárias, Octais e Hexadecimais", "Binárias e Octais", "Binárias e Decimais", "Binárias, Decimais e Hexadecimais"],
    level: 2
}

const q3 = {
    mat: materias[0],
    desc: "Converta 100001 para a base decimal",
    resp: "33",
    options: ["39", "65", "35", "129"],
    level: 3
}

const q4 = {
    mat: materias[0],
    desc: "Como se cria uma variável nos códigos do Arduino?",
    resp: "#define",
    options: ["#include", "DHTLUPIN", "SerialPrint"],
    level: 4
}

const q5 = {
    mat: materias[0],
    desc: "Calcule em decimal: 100101 + 01111",
    resp: "71",
    options: ["75", "154", "38", "127"],
    level: 5
}

const q6 = {
    mat: materias[1],
    desc: "Qual é o atributo que estiliza os elementos?",
    resp: "style",
    options: ["id", "css", "script", "onclick"],
    level: 1
}

const q7 = {
    mat: materias[1],
    desc: "Propriedade do Java Script que insere código HTML no elemento.",
    resp: "innerHTML",
    options: ["style", "<p>", "id", "color"],
    level: 2
}

const q8 = {
    mat: materias[1],
    desc: "Para que serve o evento onClick?",
    resp: "Disparará o código em JavaScript que está dentro dos parênteses",
    options: ["Disparará uma código em HTML para interagir com o usuário", "Disparará um alert vazio"],
    level: 3
}

const q9 = {
    mat: materias[1],
    desc: "Qual código abaixo é um exemplo de interpolação? Considere a variável 'primeira_parte' = 'Olá'",
    resp: "var frase = `${primeira_parte}, Mundo!`",
    options: ["var frase = '${primeira_parte}, Mundo!'", "var frase = 'primeira_parte Mundo!'", "var frase = ${`primeira_parte , Mundo!`}", "var frase = 'Olá,' + 'Mundo!'"],
    level: 4
}

const q10 = {
    mat: materias[1],
    desc: "Se uma variável não está definida no escopo global, apenas local, o que acontecerá com o script ao tentar usar essa variável numa outra função?",
    resp: "Ele não irá capturar o valor da variável e um erro será apresentado",
    options: ["Nada pois o escopo local criará a variável novamente", "Não acontece nada, escopos não interferem nesses casos", "Não é possível criar variáveis globais"],
    level: 5
}

const q11 = {
    mat: materias[2],
    desc: "O que é o Git?",
    resp: "É um sistema de controle de versionamento de códigos",
    options: ["É um sistema para salvar o código em vários computadores", "É um sistema para criar equipes e programar simultaneamente"],
    level: 1
}

const q12 = {
    mat: materias[2],
    desc: "O que o comando 'git status' executa?",
    resp: "Mostra os arquivos adicionados e não adicionados ao Git",
    options: ["Mostra os arquivos não adicionados ao Git", "Mostra os arquivos adicionados ao Git", "Mostra se o repositório está online ou não"],
    level: 2
}

const q13 = {
    mat: materias[2],
    desc: "O que o comando 'git config user.name' executa?",
    resp: "Mostra o user.name configurado no git",
    options: ["Deleta o user.name do git", "Gera um erro pois falta o comando '--global'"],
    level: 3
}

const q14 = {
    mat: materias[2],
    desc: "O que o comando 'git add .' executa?",
    resp: "Insere todos os arquivos não adicionados ao Git",
    options: ["Insere o primeiro arquivo não adicionado em ordem alfabética ao Git", "Adiciona o arquivo mais recente não adicionado ao Git"],
    level: 4
}

const q15 = {
    mat: materias[2],
    desc: `O que o comando "git commit -m '...mensagem...'" executa?`,
    resp: "Define uma espécie de marco no projeto com a descrição da mensagem",
    options: ["Atualiza o repositório remoto e local", "Inicia um novo repositório"],
    level: 5
}

const q16 = {
    mat: materias[3],
    desc: "O que é o 'escopo' em um projeto de TI?",
    resp: "Escopo determina e documenta os objetivos específicos de cada projeto, como suas entregas, tarefas, custos e prazos. Além disso, a documentação do escopo explica os limites de um projeto",
    options: ["Atualiza o repositório remoto e local", "Inicia um novo repositório"],
    level: 2
}

const q17 = {
    mat: materias[3],
    desc: "O que é o 'backlog' em um projeto de TI?",
    resp: "Define uma espécie de marco no projeto com a descrição da mensagem",
    options: ["Atualiza o repositório remoto e local", "Inicia um novo repositório"],
    level: 2
}

const q18 = {
    mat: materias[3],
    desc: "O que são as 'premissas' em um projeto de TI?",
    resp: "Define uma espécie de marco no projeto com a descrição da mensagem",
    options: ["Atualiza o repositório remoto e local", "Inicia um novo repositório"],
    level: 2
}

const q19 = {
    mat: materias[3],
    desc: "O que são as 'restrições' em um projeto de TI?",
    resp: "Define uma espécie de marco no projeto com a descrição da mensagem",
    options: ["Atualiza o repositório remoto e local", "Inicia um novo repositório"],
    level: 2
}

const q20 = {
    mat: materias[3],
    desc: "O que o comando 'git commit -m '...mensagem...'' executa?",
    resp: "Define uma espécie de marco no projeto com a descrição da mensagem",
    options: ["Atualiza o repositório remoto e local", "Inicia um novo repositório"],
    level: 2
}



function getQuestions(){
    return [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15];
}