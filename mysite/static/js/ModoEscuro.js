// Função para ativar ou desativar o modo escuro
function dark_mode() {
    const elemento = document.body;

    // Toggle: Adiciona a classe 'dark-mode' se ausente, remove se presente
    elemento.classList.toggle('dark-mode');

    // Salva o estado atual no armazenamento local
    const modoEscuroAtivado = elemento.classList.contains('dark-mode');
    localStorage.setItem('modoEscuro', modoEscuroAtivado.toString());
}
// Função para ativar ou desativar o modo escuro
function AtivarModoEscuro() {
    const modoEscuroAtivado = localStorage.getItem('modoEscuro') === 'true';
    const elemento = document.body;

    modoEscuroAtivado ? elemento.classList.add('dark-mode') : elemento.classList.remove('dark-mode');

    console.log(modoEscuroAtivado ? "O modo Escuro está Ativado" : "O modo Escuro está desativado");

    return modoEscuroAtivado.toString();
}

// Função para controlar o estado da lâmpada
function ControlarLampada() {
    const lampadaAtivada = localStorage.getItem('lampadaAtiva') === 'true';
    const lampadaElement = document.getElementById('lampada');

    if (lampadaAtivada) {
        lampadaElement.src = localStorage.getItem('lampadaUrlAtiva') || "https://www.w3schools.com/html/pic_bulbon.gif";
    } else {
        lampadaElement.src = localStorage.getItem('lampadaUrlInativa') || "https://www.w3schools.com/html/pic_bulboff.gif";
    }

    console.log(lampadaAtivada ? "A Lâmpada está ativada" : "A Lâmpada está desativada");
}

// Função para verificar e aplicar as funções controlar e aplicar
function VerificarModoEscuro() {
    AtivarModoEscuro();
    ControlarLampada();
    const nome = localStorage.getItem('nome') || 'dark mode';
    document.getElementById('name').innerHTML = nome;
    console.log(localStorage);
}

// Função para alternar a imagem da lâmpada e o modo escuro
function lampada() {
    const light = ["https://www.w3schools.com/html/pic_bulboff.gif", 'dark mode'];
    const dark = ["https://www.w3schools.com/html/pic_bulbon.gif", 'light mode'];
    const desligado = document.getElementById('lampada').src === light[0];

    // Define a imagem da lâmpada e o texto com base no estado do modo escuro
    const ligar = desligado ? dark[0] : light[0];
    document.getElementById('lampada').src = ligar;

    const nome = desligado ? dark[1] : light[1];

    // Obtém o estado atual da lâmpada do armazenamento local
    const lampadaAtivada = desligado;
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
