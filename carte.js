// Initialiser la carte Leaflet
const map = L.map('map').setView([20, 0], 2); // Vue initiale centrée sur le monde

// Ajouter une couche de carte (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Stocker les destinations choisies
const destinations = [];

// Fonction pour gérer les clics sur la carte
map.on('click', function (e) {
    const { lat, lng } = e.latlng;

    // Ajouter un marqueur sur la carte
    const marker = L.marker([lat, lng]).addTo(map);

    // Ajouter une info au marqueur
    marker.bindPopup(`Destination ajoutée : ${lat.toFixed(2)}, ${lng.toFixed(2)}`).openPopup();

    // Ajouter la destination à la liste
    destinations.push({ lat, lng });
    console.log(`Destination ajoutée : Latitude ${lat}, Longitude ${lng}`);
});

// Bouton pour finaliser le voyage
const finalizeButton = document.getElementById('finalize-trip');
const resultMessage = document.getElementById('result-message');
const destinationList = document.getElementById('destination-list');

finalizeButton.addEventListener('click', () => {
    if (destinations.length === 0) {
        alert("Choisis au moins une destination !");
        return;
    }

    // Afficher les destinations choisies
    destinationList.innerHTML = '';
    destinations.forEach((destination, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Destination ${index + 1} : Latitude ${destination.lat.toFixed(2)}, Longitude ${destination.lng.toFixed(2)}`;
        destinationList.appendChild(listItem);
    });

    // Afficher le message final
    resultMessage.classList.remove('hidden');
});
