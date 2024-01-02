    // Função para atualizar a hora
        function updateTime() {
            // Obtém a data e hora atuais
            var currentDate = new Date();

            // Obtém horas, minutos e segundos da data atual
            var hours = currentDate.getHours();
            var minutes = currentDate.getMinutes();
            var seconds = currentDate.getSeconds();

            // Adiciona um zero à frente se o valor for menor que 10
            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;

            // Atualiza o conteúdo do elemento com ID "horas" para exibir a hora formatada
            document.getElementById('horas').innerHTML = hours + ":" + minutes + ":" + seconds;
        }

        // Define a função updateTime para ser chamada a cada 1000 milissegundos (1 segundo)
        setInterval(updateTime,1000);

        // Chama a função updateTime imediatamente para exibir a hora ao carregar a página
        updateTime();

        function hora() {
            $.ajax({
                url: '/horas',
                success: function (data) {
                    atualizar(data.hora);
                    
                    document.getElementById('time-color').addEventListener('load', function(event) {
                        // Se for um evento de carga, aplica uma cor específica (por exemplo, preto)
                        aplicarCor('black');
                    
                        // Outras ações que você deseja realizar no carregamento...
                    });
                    document.getElementById('time-color').addEventListener('click', function(event) {
                        // Obtém a cor aleatória
                        var corGerada = corAleatoria();
                        // Aplica a cor ao texto usando o ID do elemento
                        aplicarCor(corGerada);
                        // Outras ações que você deseja realizar no clique...
                    });
                    // Atualiza o texto com as horas
                    
                }
            });
        }
        // funçao para atualizar hora
        function atualizar(horas){
            $("#ajax").text("Pela requisição do back python as horas são: " + horas);
        }
        //função para aplicar cor
        function aplicarCor(cor){
            document.getElementById('ajax').style.color = cor;
        }
        //função para gerar cor
        function corAleatoria() { 
            // Gera uma cor aleatória usando Chroma.js
            return chroma.random().hex();
        }
        // Chama a função ao carregar a página
        hora();

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

        function dark_mode(){
            const elemento = document.body;
            elemento.classList.toggle('dark-mode');
        }
        