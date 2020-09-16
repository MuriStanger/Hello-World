var campoNome = document.getElementById('campoNome');
var mensagemHelloWorld = document.getElementById('mensagemHelloWorld');
var botaoOk = document.getElementById('botaoOK')
botaoOk.onclick = helloWorld;
var botaoLimpar = document.getElementById('botaoLimpar');
botaoLimpar.addEventListener("click", limpar);

function helloWorld() {

    // passo 1 - Pegar o campo
    // var campoNome = document.getElementById('campoNome');
    // passo 2 - Pegar valor do campo
    var nome = campoNome.value.trim();
    // passo 3 - Montar a mensagem de hello word.
    var mensagem = "hello world " + nome + "!";
    // passo 4 - pegar o parágrafo
    //ar mensagemHelloWorld = document.getElementById('mensagemHelloWorld');
    // passo 5 - trocar conteúdo do parágrafo
    mensagemHelloWorld.innerText = mensagem;
}

// limpar campo nome
function limpar() {
    console.log("entrou");
    campoNome.value = '';
    mensagemHelloWorld.innerText = "";




};