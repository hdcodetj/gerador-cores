const btnGerar = document.getElementById('btnGerar');
const corFundo = document.getElementById('corFundo');
const codigoCor = document.getElementById('codigoCor');

// Função para gerar a cor aleatória
function gerarCorAleatoria() {
    const letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

// Função para atualizar a interface
function atualizarInterface(cor) {
    corFundo.style.backgroundColor = cor;
    codigoCor.textContent = `Código da cor: ${cor}`;
}

// Evento de clique no botão
btnGerar.addEventListener('click', () => {
    const cor = gerarCorAleatoria();
    atualizarInterface(cor);
});
