function lampada(){
    let light = "https://www.w3schools.com/html/pic_bulboff.gif";
    let dark = "https://www.w3schools.com/html/pic_bulbon.gif";
    let desligado = document.getElementById('lampada').src;
    const  ligar = (desligado===light)? dark : light;
    document.getElementById('lampada').src = ligar;
    const nome = (desligado===light)?'light mode':'dark mode';
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
    const modoEscuroAtivado = localStorage.getItem('modoEscuro');
    const elemento = document.body;

    // Usa o operador ternário para adicionar ou remover a classe 'dark-mode'
    modoEscuroAtivado ? elemento.classList.add('dark-mode') : elemento.classList.remove('dark-mode');
}

// Chama a função para verificar e aplicar o modo escuro ao carregar a página
VerificarModoEscuro();
