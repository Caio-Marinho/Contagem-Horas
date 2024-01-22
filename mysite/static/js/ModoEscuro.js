
function lampada(){
    let light = ["https://www.w3schools.com/html/pic_bulboff.gif",'dark mode'];
    let dark = ["https://www.w3schools.com/html/pic_bulbon.gif",'light mode'];
    let desligado = document.getElementById('lampada').src;
    
    // Define a imagem da lâmpada e o texto com base no estado do modo escuro
    const  ligar = (desligado===light[0])? dark[0] : light[0];
    document.getElementById('lampada').src = ligar;

    const nome = (desligado===light[0])?dark[1]:light[1];
    document.getElementById('name').innerHTML = nome;
    dark_mode();
}

// Função para ativar ou desativar o modo escuro
function dark_mode() {
    const elemento = document.body;

    // Toggle: Adiciona a classe 'dark-mode' se ausente, remove se presente
    elemento.classList.toggle('dark-mode');

    // Salva o estado atual no armazenamento local
    const modoEscuroAtivado = elemento.classList.contains('dark-mode');
    localStorage.setItem('modoEscuro', modoEscuroAtivado.toString());
}

// Função para verificar e aplicar o modo escuro
function VerificarModoEscuro() {
    // Obtém o estado atual do modo escuro do armazenamento local
    const modoEscuroAtivado = localStorage.getItem('modoEscuro')==='true';
    const elemento = document.body;

    // Usa o operador ternário para adicionar ou remover a classe 'dark-mode'
    modoEscuroAtivado ? elemento.classList.add('dark-mode') : elemento.classList.remove('dark-mode');
    return modoEscuroAtivado.toString();
}

// Chama a função para verificar e aplicar o modo escuro ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    VerificarModoEscuro();
});

