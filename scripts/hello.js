function typeHello() {
    const text = 'Alla Spears';
    let index = 0;
    const interval = setInterval(() => {
        document.querySelector('h1').innerHTML += text[index];
        index++;
        if (index === text.length) {
            clearInterval(interval);
        }
    }, 200);
}

window.onload = typeHello;
