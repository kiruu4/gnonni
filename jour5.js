function submitWords() {
  // Récupère les valeurs des champs
  const word1 = document.getElementById('word1').value.trim();
  const word2 = document.getElementById('word2').value.trim();
  const word3 = document.getElementById('word3').value.trim();

  // Vérifie que tous les champs sont remplis
  if (!word1 || !word2 || !word3) {
    alert("Merci de remplir tous les champs !");
    return;
  }

  // Affiche les résultats
  document.getElementById('response1').textContent = `Mot 1 : ${word1}`;
  document.getElementById('response2').textContent = `Mot 2 : ${word2}`;
  document.getElementById('response3').textContent = `Mot 3 : ${word3}`;
  document.getElementById('result').classList.remove('hidden');

  // Optionnel : désactive le formulaire après validation
  document.getElementById('descriptionForm').style.display = 'none';
}
