function trocarAba(idAba) {
  // 1. Pega todas as seções
  const abas = document.querySelectorAll('.aba-conteudo');
  
  // 2. Esconde todas as seções removendo a classe 'active'
  abas.forEach(aba => {
    aba.classList.remove('active');
  });

  // 3. Mostra a seção que você clicou
  const abaAlvo = document.getElementById(idAba);
  abaAlvo.classList.add('active');

  // 4. (Opcional) Fecha o menu hambúrguer automaticamente no celular ao clicar
  document.getElementById('bt_menu').checked = false;
  
  // 5. Rola para o topo para garantir que o usuário veja o início da página
  window.scrollTo(0,0);
}
function copiarFicha() {
    // 1. Seleciona o elemento de texto
    const areaTexto = document.getElementById("textoFicha");
    
    // 2. Tenta usar a forma mais moderna de copiar (Clipboard API)
    if (navigator.clipboard) {
        navigator.clipboard.writeText(areaTexto.value).then(() => {
            mostrarAviso();
        });
    } else {
        // 3. Fallback para navegadores antigos/alguns celulares
        areaTexto.select();
        areaTexto.setSelectionRange(0, 99999); // Para mobile
        document.execCommand("copy");
        mostrarAviso();
    }
}

function mostrarAviso() {
    const aviso = document.getElementById("avisoCopiado");
    aviso.style.display = "block";
    
    // Esconde o aviso depois de 2 segundos
    setTimeout(() => {
        aviso.style.display = "none";
    }, 2000);
}
function filtrarJutsu(elemento) {
    // Esconde todas as seções
    document.querySelectorAll('.lista-jutsus').forEach(sec => {
        sec.style.display = 'none';
    });
    // Mostra apenas a clicada
    document.querySelector('.' + elemento + '-section').style.display = 'block';
}
function filtrarSistemas() {
    // 1. Pega o texto da busca
    let input = document.getElementById('buscaSistemas').value.toLowerCase();
    
    // 2. Pega a seção de sistemas
    let secaoSistemas = document.getElementById('sistemas');
    
    // 3. Pega todos os blocos que são "filhos" diretos da seção sistemas
    // Isso garante que ele pegue QUALQUER div de sistema (Líderes, Treino, Atributos, etc)
    let blocos = secaoSistemas.children;

    for (let i = 0; i < blocos.length; i++) {
        let bloco = blocos[i];
        
        // Ignora o Título da página e a própria Barra de Pesquisa na busca
        if (bloco.tagName === "H2" || bloco.classList.contains('container-pesquisa-sistemas')) {
            continue;
        }

        // Pega todo o texto dentro do bloco
        let textoNoBloco = bloco.innerText.toLowerCase();
        
        // Se encontrar o texto, mostra. Se não, esconde.
        if (textoNoBloco.includes(input)) {
            bloco.style.display = ""; // Mostra
            bloco.style.opacity = "1";
        } else {
            bloco.style.display = "none"; // Esconde
        }
    }
}

function filtrarSistemas() {
    // 1. Pega o que foi digitado
    let input = document.getElementById('buscaSistemas').value.toLowerCase().trim();
    let secaoSistemas = document.getElementById('sistemas');
    
    // 2. Pega todos os elementos que podem ser um "bloco de sistema"
    // Aqui incluímos todas as classes que você usou no HTML
    let blocos = secaoSistemas.querySelectorAll('.card-sistema, .painel-lideranca, .lider-box, .divisor-biju');

    blocos.forEach(bloco => {
        // Se for um divisor (aquela linha laranja), só mostramos se a busca estiver vazia
        if (bloco.classList.contains('divisor-biju')) {
            bloco.style.display = (input === "") ? "block" : "none";
            return;
        }

        // Pega o texto de dentro do bloco
        let textoNoBloco = bloco.innerText.toLowerCase();

        // 3. Lógica de busca
        if (textoNoBloco.includes(input)) {
            bloco.style.display = ""; // Mostra o bloco
        } else {
            bloco.style.display = "none"; // Esconde o bloco
        }
    });
}
const audio = document.getElementById("musicaFundo");
const btnMusica = document.getElementById("btnMusica");
const iconeMusica = document.getElementById("iconeMusica");
const sliderVolume = document.getElementById("volumeMusica");

// Define volume inicial baixo (30%)
if (audio) {
    audio.volume = 0.3;
}

// tenta começar a música assim que a página carregar
window.addEventListener('load', () => {
    if (audio) {
        audio.play().catch(err => {
            // muitos navegadores bloqueiam autoplay; usuário precisa clicar no botão
            console.log('Autoplay impedido pelo navegador:', err);
        });
    }
});

function toggleMusica() {
    if (audio.paused) {
        audio.play();
        iconeMusica.innerText = "⏸️";
        btnMusica.style.boxShadow = "0 0 15px #ff9100";
    } else {
        audio.pause();
        iconeMusica.innerText = "▶️";
        btnMusica.style.boxShadow = "none";
    }
}

function ajustarVolume() {
    audio.volume = sliderVolume.value;
}

