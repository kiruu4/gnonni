// Récupérer les éléments
const quizForm = document.getElementById('quiz-form');
const submitButton = document.getElementById('submit-quiz');
const resultMessage = document.getElementById('result-message');

// Gestion du clic sur le bouton "Valider"
submitButton.addEventListener('click', () => {
  // Récupérer les réponses de l'utilisateur
  const formData = new FormData(quizForm);
  const answers = {};
  for (let [key, value] of formData.entries()) {
    answers[key] = value.trim().toLowerCase(); // Convertir en minuscule pour comparaison
  }

  // Vérifier les réponses spécifiques
  // Question 2 : Couleur préférée
  if (answers['question2'] !== 'vert') {
    alert("La réponse à 'Quelle est ma couleur préférée ?' est incorrecte. La bonne réponse est 'vert'.");
    return; // Arrêter ici si la réponse est incorrecte
  }

  // Question 4 : Plat préféré
  if (!answers['question4'].includes('carbo')) {
    alert("La réponse à 'Quel est le plat que je cuisine le mieux ?' est incorrecte. La bonne réponse doit contenir 'carbo' ou 'carbonara'.");
    return; // Arrêter ici si la réponse est incorrecte
  }

  // Question 5 : Surnom préféré
  if (!answers['question5'].includes('gnonni') && !answers['question5'].includes('gnoni')) {
    alert("La réponse à 'Quel est ton surnom préféré que je t’ai donné ?' est incorrecte. La bonne réponse doit contenir 'gnonni' ou 'gnoni'.");
    return; // Arrêter ici si la réponse est incorrecte
  }

  // Si toutes les réponses sont correctes, afficher le message final
  resultMessage.classList.remove('hidden');
  quizForm.classList.add('hidden'); // Masquer le quiz après validation
});
