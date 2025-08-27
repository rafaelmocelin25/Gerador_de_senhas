const numerosenha = document.querySelector('.parametro-senha__texti')
let tamanhoSenha = 12;
numeroSenha.textcontent = tamanhoSenha;

const botoes = document.querySelectorAll('.paramero.senha__botao');

botoes[0].onclick = diminuiTamanho;

function diminuiTamanho(){
    tamanhoSenha = tamanhoSenha
}

console.log(botoes);