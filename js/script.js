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
