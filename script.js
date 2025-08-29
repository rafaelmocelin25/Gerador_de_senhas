const numeroSenha = document.querySelector('.parametro-senha__texto')
let tamanhoSenha = 12;
numeroSenha.textcontent = tamanhoSenha;

const botoes = document.querySelectorAll('.paramero.senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function aumentaTamanho(){
    if (tamanhoSenha)
    tamanhoSenha = tamanhoSenha + 1;
    numeroSenha.textcontent = tamanhoSenha;
}

function diminuiTamanho(){
    tamanhoSenha = tamanhoSenha - 1;
    numeroSenha.textcontent = tamanhoSenha;
}

console.log(botoes);