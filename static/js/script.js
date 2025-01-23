document.addEventListener('DOMContentLoaded', () => {
    const crazyHeader = document.getElementById('crazy-header');
    const crazyFooter = document.getElementById('crazy-footer');
    const imageRain = document.getElementById('image-rain');
    const description = document.getElementById('description');

    // Função para gerar cor aleatória
    const randomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;

    // Frases aleatórias para o header
    const headerPhrases = [
        "Jfifi's Brainroot Extravaganza!",
        "Welcome to the Madness!",
        "Logic? We don't need no stinkin' logic!",
        "Sanity is overrated!",
        "Embrace the chaos!"
    ];

    // Animação do header
    setInterval(() => {
        crazyHeader.textContent = headerPhrases[Math.floor(Math.random() * headerPhrases.length)];
        crazyHeader.style.color = randomColor();
    }, 2000);

    // Animação do footer
    setInterval(() => {
        crazyFooter.textContent = headerPhrases[Math.floor(Math.random() * headerPhrases.length)].split('').reverse().join('');
        crazyFooter.style.color = randomColor();
    }, 1000);

    // Chuva de imagens
    const createImage = () => {
        const img = document.createElement('img');
        img.src = `/static/images/jfifi${Math.floor(Math.random() * 5) + 1}.png`; // Assumindo que temos 5 imagens diferentes
        img.style.position = 'absolute';
        img.style.left = `${Math.random() * 100}%`;
        img.style.top = '-100px';
        img.style.width = '50px';
        img.style.height = '50px';
        img.style.animation = `rotate ${Math.random() * 5 + 2}s linear infinite`;
        imageRain.appendChild(img);

        setTimeout(() => {
            img.remove();
        }, 10000);
    };

    setInterval(createImage, 500);

    // Luzes piscantes
    const createLight = () => {
        const light = document.createElement('div');
        light.style.position = 'fixed';
        light.style.width = '10px';
        light.style.height = '10px';
        light.style.borderRadius = '50%';
        light.style.backgroundColor = randomColor();
        light.style.left = `${Math.random() * 100}%`;
        light.style.top = `${Math.random() * 100}%`;
        light.style.animation = 'blink 0.5s infinite';
        document.body.appendChild(light);

        setTimeout(() => {
            light.remove();
        }, 5000);
    };

    setInterval(createLight, 200);

    // Animação do texto de descrição
    setInterval(() => {
        description.style.color = randomColor();
    }, 100);
});

