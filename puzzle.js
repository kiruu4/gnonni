// Variables globales
const puzzleContainer = document.getElementById('puzzle-container');
const validateButton = document.getElementById('validate-button');
const message = document.getElementById('message');
const countdown = document.getElementById('countdown');

const imagePath = 'photo1.jpg'; // Nom de la photo
const gridSize = 4; // 4x4 pièces
const pieces = [];
let selectedPiece = null; // Suivre la pièce sélectionnée

// Initialisation du puzzle
function initializePuzzle() {
  const pieceSize = 400 / gridSize;

  // Générer des pièces
  for (let i = 0; i < gridSize * gridSize; i++) {
    const piece = document.createElement('div');
    piece.classList.add('puzzle-piece');
    piece.style.width = `${pieceSize}px`;
    piece.style.height = `${pieceSize}px`;
    piece.style.backgroundImage = `url(${imagePath})`;

    // Calculer la position correcte
    const x = -(i % gridSize) * pieceSize;
    const y = -Math.floor(i / gridSize) * pieceSize;
    piece.style.backgroundPosition = `${x}px ${y}px`;

    // Attribuer l'indice correct
    piece.setAttribute('data-index', i);
    pieces.push(piece);
  }

  // Mélanger les pièces
  pieces.sort(() => Math.random() - 0.5);
  pieces.forEach(piece => puzzleContainer.appendChild(piece));

  // Rendre les pièces interactives
  addClickEvents();
}

// Ajouter les événements de clic
function addClickEvents() {
  pieces.forEach(piece => {
    piece.addEventListener('click', () => {
      handlePieceClick(piece);
    });
  });
}

// Gérer le clic sur une pièce
function handlePieceClick(piece) {
  if (selectedPiece === null) {
    selectedPiece = piece;
    piece.classList.add('selected');
  } else if (selectedPiece === piece) {
    selectedPiece.classList.remove('selected');
    selectedPiece = null;
  } else {
    swapPieces(selectedPiece, piece);
    selectedPiece.classList.remove('selected');
    selectedPiece = null;
  }
}

// Échanger deux pièces
function swapPieces(piece1, piece2) {
  const index1 = piece1.getAttribute('data-index');
  const index2 = piece2.getAttribute('data-index');

  const parent = piece1.parentNode;
  const sibling = piece2.nextSibling === piece1 ? piece2 : piece2.nextSibling;

  parent.insertBefore(piece2, piece1);
  parent.insertBefore(piece1, sibling);

  piece1.setAttribute('data-index', index2);
  piece2.setAttribute('data-index', index1);
}

// Gestion du bouton Valider
validateButton.addEventListener('click', () => {
  // Afficher directement le message et démarrer le compte à rebours
  showMessage();
});

// Afficher le message final et le compte à rebours
function showMessage() {
  message.classList.remove('hidden');
  startCountdown();
}

// Compte à rebours pour le massage
function startCountdown() {
  const targetDate = new Date('December 6, 2024 21:00:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.textContent = `Temps restant avant ton massage : ${days} jours, ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
      clearInterval(interval);
      countdown.textContent = 'C’est l’heure du massage ! 💆‍♂️💆‍♀️';
    }
  }

  const interval = setInterval(updateCountdown, 1000);
}

// Initialiser le puzzle
initializePuzzle();
