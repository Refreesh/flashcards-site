
let currentCard = 0;
const flashcards = [
    { question: "S'adapter aux attentes des clients avec des locations plus courtes ?", answer: "Les jeunes générations préfèrent des locations flexibles. En offrant des options de location à la journée ou à l'heure, une entreprise maximise l'utilisation des bateaux et attire une clientèle plus large et plus jeune." },
    { question: "Investir dans des bateaux bas de gamme dédiés à la location à petit prix ?", answer: "Les jeunes recherchent des options accessibles. L'entreprise peut proposer des modèles de bateaux simples mais fonctionnels, à prix réduit, pour attirer une clientèle plus jeune tout en maintenant une rentabilité par des volumes plus élevés." },
    { question: "Proposer des activités entre membres du club ?", answer: "Créer un club pour les membres permet de renforcer l'engagement. Des événements exclusifs ou des sorties en mer collectives créent une communauté fidèle, avec des revenus supplémentaires provenant des frais d'adhésion ou des événements." },
    { question: "Réguler les émissions polluantes et adopter des pratiques durables ?", answer: "Les jeunes sont sensibles à l'environnement. En adoptant des pratiques écologiques et en investissant dans des bateaux plus écologiques, l'entreprise attire une clientèle responsable et améliore son image de marque." }
];

const flashcardElement = document.getElementById("flashcard");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const feedbackElement = document.getElementById("feedback");

function updateFlashcard() {
    const card = flashcards[currentCard];
    questionElement.textContent = card.question;
    answerElement.textContent = card.answer;
    answerElement.style.display = "none";
    flashcardElement.classList.remove("swiped-left", "swiped-right");
}

function swipeCard(isCorrect) {
    if (isCorrect) {
        flashcardElement.classList.add("swiped-right");
        feedbackElement.textContent = "Bonne réponse !";
    } else {
        flashcardElement.classList.add("swiped-left");
        feedbackElement.textContent = "Mauvaise réponse ! La réponse était : " + flashcards[currentCard].answer;
    }

    // Attendre que l'animation se termine avant de passer à la carte suivante
    setTimeout(() => {
        currentCard = (currentCard + 1) % flashcards.length;
        updateFlashcard();
    }, 300);
}

// Gestion du clic pour afficher la réponse
flashcardElement.addEventListener("click", () => {
    answerElement.style.display = "block";
});

// Ajout des événements de glissement pour simuler les réponses
flashcardElement.addEventListener("swiped-left", () => swipeCard(false));
flashcardElement.addEventListener("swiped-right", () => swipeCard(true));

// Initialiser la première carte
updateFlashcard();
