// Fonction pour créer un flocon de neige
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.width = snowflake.style.height = Math.random() * 10 + 5 + 'px';
    document.body.appendChild(snowflake);

    // Supprimer le flocon après 5 secondes
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Générer un flocon toutes les 100ms
setInterval(createSnowflake, 100);
