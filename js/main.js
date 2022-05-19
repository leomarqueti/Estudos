// Gerador de perguntas e respostas aleatórias

listaDePerguntas = [pg1,pg2,pg3,pg4,pg5,pg6,pg7,pg8,pg9,pg10,pg11,pg12,pg13,pg14,pg15,pg16,pg17,pg18,pg19,eco1,eco2,eco3,eco4,eco5,eco6,eco7,eco8,eco9,eco10,eco11,eco12,eco13,eco14,eco15,eco16,eco17,eco18,eco19,eco20,eco21,eco22,,eco23,eco24,eco25,eco26,eco27,eco28,eco29,eco30,eco31,eco32,eco33,eco34,eco35,eco36,eco37,eco38,eco39,eco40,ges1,ges2,ges3,ges4,ges5,ges6,ges7,ges8,ges9,ges10,ges11,ges12,ges13,ges14,ges15,ges16,ges17,ges18,ges19,ges20,ges21,ges22];
// lista das perguntas

let numeroRandomParaTirarPergunta
let checkbox1
let checkbox2
let checkbox3
let checkbox4

let acertos = 0
let erros = 0
let pontos = listaDePerguntas.length;

function mostrarAcertos(){
    let divAcertos = document.querySelector(".acertos")
    divAcertos.innerHTML = acertos;
}

function mostrarErros(){
    let divErros = document.querySelector(".erros")
    divErros.innerHTML = erros;
}

function mostrarPontos(){
    let divPontos = document.querySelector(".pontos")
    divPontos.innerHTML = pontos;
}
// Mostra os pontos

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Função para gerar um número aleatório

function mostrarPergunta() {
    mudarCorDoFundoDaResposta("transparent", 0, 1, 2, 3)
    
    let numeroRandomListaPergunta = getRandomInt(0, listaDePerguntas.length);
    numeroRandomParaTirarPergunta = numeroRandomListaPergunta;

    let numeroRandom1 = getRandomInt(0, listaDePerguntas.length);
    let numeroRandom2 = getRandomInt(0, listaDePerguntas.length);
    let numeroRandom3 = getRandomInt(0, listaDePerguntas.length);

    checkbox1 = listaDePerguntas[numeroRandomListaPergunta].respontaCerta
    checkbox2 = listaDePerguntas[numeroRandom1].respontaCerta
    checkbox3 = listaDePerguntas[numeroRandom2].respontaCerta
    checkbox4 = listaDePerguntas[numeroRandom3].respontaCerta

    listaDeCheckbox = [checkbox1, checkbox2, checkbox3, checkbox4]

    let pergunta = listaDePerguntas[numeroRandomListaPergunta].pergunta;
    document.querySelector(".perguntas").innerHTML = `<h2>`+pergunta+`</h2>`;

    while(true){
        let random = getRandomInt(0, 3)
        document.querySelector(".resposta1").innerHTML = `<input type="checkbox" class="chek1" value="`+listaDeCheckbox[random]+`">` +listaDeCheckbox[random]+`</input>`
        let random2 = getRandomInt(0, 3)
        while(random2 == random){
            random2 = getRandomInt(0, 3)
        }
        document.querySelector(".resposta2").innerHTML = `<input type="checkbox" class="chek2" value="`+listaDeCheckbox[random2]+`">`+listaDeCheckbox[random2]+`</input>`
        let random3 = getRandomInt(0, 3)

        while(random3 == random || random3 == random2){
            random3 = getRandomInt(0, 3)
        }
        document.querySelector(".resposta3").innerHTML = `<input type="checkbox" class="chek3" value="`+listaDeCheckbox[random3]+`">`+listaDeCheckbox[random3]+`</input>`
        let random4 = getRandomInt(0, 3)

        while(random4 == random || random4 == random2 || random4 == random3){
            random4 = getRandomInt(0, 3)
        }
        document.querySelector(".resposta4").innerHTML = `<input type="checkbox" class="chek4" value="`+listaDeCheckbox[random4]+`">`+listaDeCheckbox[random4]+`</input>`
        break;
    }
    mostrarPontos()
    mostrarAcertos()
    mostrarErros()
}
// Função para mostrar a pergunta e as respostas na tela

function verificarResposta() {
    let divResposta1 = document.querySelector(".chek1")
    let divResposta2 = document.querySelector(".chek2")
    let divResposta3 = document.querySelector(".chek3")
    let divResposta4 = document.querySelector(".chek4")
    console.log(listaDePerguntas.length)

    listaDivResposta = [divResposta1, divResposta2, divResposta3, divResposta4]

    for(let i = 0; i < listaDivResposta.length; i++){
        if(listaDivResposta[i].checked == true){
            if(listaDivResposta[i].value == checkbox1){
                removerPergunta()
                pontos = listaDePerguntas.length
                acertos++
                mudarCorDoFundoDaResposta("green", i)
            }
            else{
                adicionarPergunta()
                pontos = listaDePerguntas.length
                erros++
                mudarCorDoFundoDaResposta("red", i)
            }
        }    
    }   
    mostrarPontos()
    mostrarAcertos()
    mostrarErros()
}
// Função para verificar a resposta

function mudarCorDoFundoDaResposta(cor, div, div2, div3, div4) {
    let divFundoResposta1 = document.querySelector(".resposta1")
    let divFundoResposta2 = document.querySelector(".resposta2")
    let divFundoResposta3 = document.querySelector(".resposta3")
    let divFundoResposta4 = document.querySelector(".resposta4")

    listaDivFundo = [divFundoResposta1, divFundoResposta2, divFundoResposta3, divFundoResposta4]

    listaDivFundo[div].style.backgroundColor = cor
    listaDivFundo[div2].style.backgroundColor = cor
    listaDivFundo[div3].style.backgroundColor = cor
    listaDivFundo[div4].style.backgroundColor = cor
}
// Função para mudar a cor do fundo da resposta

function removerPergunta(){
    listaDePerguntas.splice(numeroRandomParaTirarPergunta, 1)
}
// Função para remover a pergunta

function adicionarPergunta() {
    let pergunta = document.querySelector("h2").textContent;
    let respostaCerta = checkbox1;
    let resposta2 = checkbox2;
    let resposta3 = checkbox3;
    let resposta4 = checkbox4;

    const perguntaRepetidaPorqueUsuarioErrou = new Questionario(pergunta, respostaCerta, resposta2, resposta3, resposta4);

    listaDePerguntas.push(perguntaRepetidaPorqueUsuarioErrou)
    console.log(listaDePerguntas)
}


