function openSurprise(day) {
    const today = new Date(); // Récupère la date actuelle
    const currentDay = today.getDate(); // Numéro du jour dans le mois
    const currentMonth = today.getMonth(); // Numéro du mois (0 = Janvier, 11 = Décembre)
  
    // Vérifie si on est bien en novembre
    if (currentMonth !== 10) { // 10 = Novembre
      alert("Ce calendrier n'est disponible qu'en novembre !");
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