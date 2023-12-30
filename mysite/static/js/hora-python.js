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