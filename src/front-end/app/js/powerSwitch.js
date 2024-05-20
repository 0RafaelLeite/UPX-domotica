document.addEventListener('click', function(event) {
    // Verifica se o clique aconteceu em um SVG com a classe .power
    if (event.target.matches('.power')) {
        const powerSVG = event.target;
        let isOn = powerSVG.getAttribute('data-is-on') === 'true';

        // Alterna o estado
        isOn = !isOn;

        // Muda a cor do SVG
        powerSVG.setAttribute('fill', isOn ? 'lime' : 'gray');

        // Atualiza o atributo de dados
        powerSVG.setAttribute('data-is-on', isOn);

          // Envia solicitação ao ESP32 com identificador
        fetch(`http://<endereço_do_ESP32>/led`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: powerSVG.dataset.index, state: isOn ? 'on' : 'off' }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
});