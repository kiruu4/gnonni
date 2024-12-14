const wheel = document.querySelector('.roulette-wheel');
const spinButton = document.getElementById('spin-button');
const resultMessage = document.getElementById('result-message');
const chosenActivity = document.getElementById('chosen-activity');

spinButton.addEventListener('click', () => {
    // Définir le nombre de rotations et la section choisie
    const rotations = Math.floor(Math.random() * 3) + 3; // Minimum 3 rotations
    const chosenIndex = Math.floor(Math.random() * 6); // Random entre 0 et 5
    const degreesPerSection = 60; // Diviser 360° par 6 sections
    const totalRotation = rotations * 360 + chosenIndex * degreesPerSection;

    // Appliquer la rotation à la roue
    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${totalRotation}deg)`;

    // Attendre la fin de l'animation pour afficher le résultat
    setTimeout(() => {
        const activities = ["Run", "Vélo", "Piscine", "Film", "Restaurant", "Pique-nique"];
        chosenActivity.textContent = activities[chosenIndex];
        resultMessage.classList.remove('hidden');
    }, 4000); // Durée de l'animation
});
