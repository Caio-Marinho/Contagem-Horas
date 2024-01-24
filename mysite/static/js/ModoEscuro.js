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
    const modoEscuroAtivado = localStorage.getItem('modoEscuro') === 'true';
    const lampadaAtivada = localStorage.getItem('lampadaAtiva') === 'true';
    const nome = localStorage.getItem('nome') || 'dark mode'; // Obtém o nome salvo ou usa 'dark mode' como padrão
    const elemento = document.body;

    // Usa o operador ternário para adicionar ou remover a classe 'dark-mode'
    modoEscuroAtivado ? elemento.classList.add('dark-mode') : elemento.classList.remove('dark-mode');

    // Usa classList.add ou classList.remove para adicionar ou remover a classe 'lampadaAtiva'
    const lampadaElement = document.getElementById('lampada');

    if (lampadaAtivada) {
        lampadaElement.src = localStorage.getItem('lampadaUrlAtiva') || "https://www.w3schools.com/html/pic_bulbon.gif";
    } else {
        lampadaElement.src = localStorage.getItem('lampadaUrlInativa') || "https://www.w3schools.com/html/pic_bulboff.gif";
    }

    // Define o nome no elemento com id 'name'
    document.getElementById('name').innerHTML = nome;

    // Console.log para verificar se a classe 'lampadaAtiva' está sendo aplicada corretamente
    console.log(modoEscuroAtivado?"O modo Escuro está Ativado":"O modo Escuro está desativado");
    console.log(lampadaAtivada?"A Lampada está ativada":"A Lampada está desativada");
    console.log(localStorage);
    return modoEscuroAtivado.toString();
}

// Função para alternar a imagem da lâmpada e o modo escuro
function lampada() {
    const light = ["https://www.w3schools.com/html/pic_bulboff.gif", 'dark mode'];
    const dark = ["https://www.w3schools.com/html/pic_bulbon.gif", 'light mode'];
    const desligado = document.getElementById('lampada').src;

    // Define a imagem da lâmpada e o texto com base no estado do modo escuro
    const ligar = (desligado === light[0]) ? dark[0] : light[0];
    document.getElementById('lampada').src = ligar;

    const nome = (desligado === light[0]) ? dark[1] : light[1];

    // Obtém o estado atual da lâmpada do armazenamento local
    const lampadaAtivada = (desligado === light[0]);
    localStorage.setItem('lampadaAtiva', lampadaAtivada.toString());

    // Salva as URLs da lâmpada no armazenamento local
    localStorage.setItem('lampadaUrlAtiva', dark[0]);
    localStorage.setItem('lampadaUrlInativa', light[0]);

    // Salva o nome no armazenamento local
    localStorage.setItem('nome', nome);

    // Define o nome no elemento com id 'name'
    document.getElementById('name').innerHTML = nome;

    // Console.log para verificar se a classe 'lampadaAtiva' está sendo aplicada corretamente
    console.log(lampadaAtivada?"A Lampada está ativada":"A Lampada está desativada");
    console.log(localStorage);

    // Chama a função para ativar ou desativar o modo escuro
    dark_mode();
}

// Chama a função para verificar e aplicar o modo escuro ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    // Chama a função para verificar e aplicar o estado da lâmpada
    VerificarModoEscuro();
});
