        // Inicializando a função de atualização
        function atualizando() {
            // Utilizando a função ajax do jQuery para fazer uma requisição ao servidor
            $.ajax({
                url: '/horas', // URL da requisição
                success: function(data) { // Função de callback caso a requisição seja bem-sucedida
                    // Atualizando o conteúdo do elemento com o ID 'hora'
                    $('#hora').text('hora atual é: ' + data.hora);
                }
            });
        }
        setInterval(atualizando,1000);

        atualizando();

        function voltar() {
            // Volta para a página inicial
            const rota = '/';
            window.location.href = rota;
        }
        document.getElementById('button').addEventListener('click',voltar);
        
        window.onload = voltar;

        function lampada(){
            let light = "https://www.w3schools.com/html/pic_bulboff.gif";
            let dark = "https://www.w3schools.com/html/pic_bulbon.gif";
            let desligado = document.getElementById('lampada').src;
            const  ligar = (desligado===light)? dark : light;
            document.getElementById('lampada').src = ligar;
            dark_mode();
        }

        function dark_mode(){
            const elemento = document.body;
            elemento.classList.toggle('dark-mode');
        }