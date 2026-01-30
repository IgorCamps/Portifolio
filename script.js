      function enviarWhats(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const mensagem = document.getElementById('mensagem').value;
        const telefone = '5573988572192';

        const text = `Olá! Me chamo ${nome}, ${mensagem}`;

        const msgFormatada = encodeURIComponent(text);
        const url = `https://whatsa.me/${telefone}/?t=${msgFormatada}`;

        window.open(url, '_blank');
      }