function openSurprise(day) {
    const today = new Date(); // Récupère la date actuelle
    const currentDay = today.getDate(); // Numéro du jour dans le mois
    const currentMonth = today.getMonth(); // Numéro du mois (0 = Janvier, 11 = Décembre)
  
    // Vérifie si on est bien en décembre
    if (currentMonth !== 11) { // 11 = Décembre
      alert("Ce calendrier n'est disponible qu'en décembre !");
      return;
    }
  
    // Vérifie si le jour peut être ouvert
    if (day <= currentDay) {
      const surprise = document.getElementById(`surprise${day}`);
      surprise.classList.toggle('hidden'); // Affiche ou cache la surprise
    } else {
      alert("Patience ! Ce jour n'est pas encore arrivé.");
    }
  }

function openPage() {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();

  // Vérifie que le jour est le 5 décembre
  if (currentMonth === 11 && currentDay >= 5) {
    window.location.href = "jour5.html"; // Redirige vers une nouvelle page
  } else {
    alert("Ce n'est pas encore le bon jour. Patience !");
  }
}
