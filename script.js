const numerosenha = document.querySelector('.parametro-senha__texti')
let tamanhoSenha = 12;
numeroSenha.textcontent = tamanhoSenha;

const botoes = document.querySelectorAll('.paramero.senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[01.onclick = aumentaTamanho;

function aumentaTamanho(){
    tamanhoSenha = tamanhoSenha + 1;
    numero.textcontent = tamanhoSenha;
}

function diminuiTamanho(){
    tamanhoSenha = tamanhoSenha - 1;
    numero.textcontent = tamanhoSenha;
}

console.log(botoes);