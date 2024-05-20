document.getElementById('deviceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const deviceName = document.getElementById('deviceName').value;
    const deviceType = document.getElementById('deviceType').value;

    let devices = [];
    try {
        devices = JSON.parse(localStorage.getItem('devices')) || [];
    } catch (error) {
        console.error('Erro ao carregar dispositivos:', error);
    }

    devices.push({ name: deviceName, type: deviceType });

    localStorage.setItem('devices', JSON.stringify(devices));

    document.getElementById('deviceName').value = '';
    document.getElementById('deviceType').selectedIndex = 0;

    window.location.href = '/src/front-end/app/pages/home/index.html';
});
