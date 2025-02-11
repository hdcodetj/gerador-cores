const btnGerar = document.getElementById('btnGerar');
const corFundo = document.getElementById('corFundo');
const codigoCor = document.getElementById('codigoCor');
const btnCopiar = document.getElementById('btnCopiar');
const btnFavoritar = document.getElementById('btnFavoritar');
const listaFavoritos = document.getElementById('listaFavoritos');
let coresFavoritas = []
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

btnCopiar.addEventListener('click', () => {
    const codigo = codigoCor.textContent.replace('Código da cor: ', ''); // Remove o texto antes do código
    navigator.clipboard.writeText(codigo).then(() => {
        btnCopiar.textContent = "Copiado!";
        setTimeout(() => btnCopiar.textContent = "Copiar Código", 2000)
    }).catch(err => {
        console.error('Erro ao copiar', err);
    });

})

btnFavoritar.addEventListener('click', () => {
    const cor = codigoCor.textContent.replace('Código da cor: ', '');
    if (!coresFavoritas.includes(cor)) {
        coresFavoritas.push(cor);
        atualizarListaFavoritos();
    } else {
        alert('Esta cor já está nos favoritos!');
    }
})

function atualizarListaFavoritos() {
    listaFavoritos.innerHTML = '';

    coresFavoritas.forEach((cor, index) => {
        const item = document.createElement('li');
        item.classList.add('favorito-item');
        item.innerHTML = `
            <span>${cor}</span>
            <button onclick="copiarCorFavorita('${cor}')">Copiar</button>
            <button onclick="removerFavorito(${index})">Remover</button>
        `;
        listaFavoritos.appendChild(item);
    });
}

function copiarCorFavorita(cor) {
    navigator.clipboard.writeText(cor).then(() => {
        alert('Código copiado: ' + cor);
    }).catch(err => {
        console.error('Erro ao copiar', err);
    })
}

function removerFavorito(index) {
    coresFavoritas.splice(index, 1);
    atualizarListaFavoritos();
}


