// Function to type 'Alla Spears' on the screen
function typeHello() {
    const text = 'Alla Spears';
    const textElement = document.getElementById('text-content');
    const icons = document.querySelector('.social-icons');
    const cursor = document.getElementById('cursor');
    let index = 0;
    const interval = setInterval(() => {
        cursor.style.visibility = 'visible'; // Show the cursor when typing starts
        textElement.innerHTML += text[index];
        index++;
        if (index === text.length) {
            clearInterval(interval);
            cursor.style.visibility = 'hidden'; // Hide the cursor after typing is completed
            icons.style.opacity = 1; // fade social icons into view
        }
    }, 300);
}

window.onload = function () {
    typeHello();

    // Add the Font Awesome script here (in case it's not already loaded)
    const fontAwesomeScript = document.createElement('script');
    fontAwesomeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js';
    document.head.appendChild(fontAwesomeScript);
};