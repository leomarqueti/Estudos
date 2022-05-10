
listaDePerguntas = [pg1,pg2,pg3,pg4,pg5,pg6,pg7,pg8,pg9,pg10,pg11,pg12,pg13,pg14,pg15,pg16,pg17,pg18,pg19,eco1,eco2,eco3,eco4,eco5,eco6,eco7,ges1,ges2,ges3,ges4,js1,js2,js3,js4,js5,js6,js7,js8,js9];
// Criação da função para gerar a pergunta

let pontos = 0;

let divPontos = document.querySelector(".pontos")
divPontos.innerHTML = pontos;

let checkbox1

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Função para gerar um número aleatório

function mostrarPergunta() {

    let divFundoResposta1 = document.querySelector(".resposta1")
    let divFundoResposta2 = document.querySelector(".resposta2")
    let divFundoResposta3 = document.querySelector(".resposta3")
    let divFundoResposta4 = document.querySelector(".resposta4")

    divFundoResposta1.style.backgroundColor = "transparent"
    divFundoResposta2.style.backgroundColor = "transparent"
    divFundoResposta3.style.backgroundColor = "transparent"
    divFundoResposta4.style.backgroundColor = "transparent"

    let numeroRandomListaPergunta = getRandomInt(0, listaDePerguntas.length);

    let pergunta = listaDePerguntas[numeroRandomListaPergunta].pergunta;
    checkbox1 = listaDePerguntas[numeroRandomListaPergunta].respontaCerta
    let checkbox2 = listaDePerguntas[numeroRandomListaPergunta].resposta2
    let checkbox3 = listaDePerguntas[numeroRandomListaPergunta].resposta3
    let checkbox4 = listaDePerguntas[numeroRandomListaPergunta].resposta4

    listaDeCheckbox = [checkbox1, checkbox2, checkbox3, checkbox4]

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
    divPontos.innerHTML = pontos;
}
// Função para mostrar a pergunta

function verificarResposta() {
    let divResposta1 = document.querySelector(".chek1")
    let divResposta2 = document.querySelector(".chek2")
    let divResposta3 = document.querySelector(".chek3")
    let divResposta4 = document.querySelector(".chek4")

    let divFundoResposta1 = document.querySelector(".resposta1")
    let divFundoResposta2 = document.querySelector(".resposta2")
    let divFundoResposta3 = document.querySelector(".resposta3")
    let divFundoResposta4 = document.querySelector(".resposta4")

    divFundoResposta1.style.backgroundColor = "transparent"
    divFundoResposta2.style.backgroundColor = "transparent"
    divFundoResposta3.style.backgroundColor = "transparent"
    divFundoResposta4.style.backgroundColor = "transparent"

    if(divResposta1.checked){
        if(divResposta1.value == checkbox1){
            divFundoResposta1.style.backgroundColor = "green"
            pontos++
        }else{
            divFundoResposta1.style.backgroundColor = "red"
            pontos--
        }
    }else if(divResposta2.checked){
        if(divResposta2.value == checkbox1){
            divFundoResposta2.style.backgroundColor = "green"
            pontos++
        }
        else{
            divFundoResposta2.style.backgroundColor = "red"
            pontos--
        }
    }else if(divResposta3.checked){
        if(divResposta3.value == checkbox1){
            divFundoResposta3.style.backgroundColor = "green"
            pontos++
        }
        else{
            divFundoResposta3.style.backgroundColor = "red"
            pontos--
        }
    }else if(divResposta4.checked){
        if(divResposta4.value == checkbox1){
            divFundoResposta4.style.backgroundColor = "green"
            pontos++
        }
        else{
            divFundoResposta4.style.backgroundColor = "red"
            pontos--
        }
    }
    divPontos.innerHTML = pontos;          
}
// Função para verificar a resposta

