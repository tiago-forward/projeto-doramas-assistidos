const imagensDoramas = document.querySelectorAll('.imagem-dorama');
const setaVoltar = document.getElementById('btn-voltar');
const setaAvancar = document.getElementById('btn-avancar');

let imagemAtual = 0;

setaAvancar.addEventListener('click', function () {

    if (imagemAtual === imagensDoramas.length - 1) {
        return;
    };

    imagemAtual++;
    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
});

setaVoltar.addEventListener('click', function () {

    if (imagemAtual === 0) {
        return
    }

    imagemAtual--;
    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
});

function esconderImagemAberta() {
    const imagemAberta = document.querySelector('.mostrar')
    imagemAberta.classList.remove('mostrar')
};

function mostrarImagem() {
    imagensDoramas[imagemAtual].classList.add('mostrar')
};

function mostrarOuEsconderSetas() {
    const primeiraImagem = imagemAtual === 0;
    if (primeiraImagem) {
        setaVoltar.classList.add('opacidade')
    } else {
        setaVoltar.classList.remove('opacidade')
    }

    const ultimaImagem = imagemAtual === imagensDoramas.length - 1;
    if (ultimaImagem) {
        setaAvancar.classList.add('opacidade')
    } else {
        setaAvancar.classList.remove('opacidade')
    }
};