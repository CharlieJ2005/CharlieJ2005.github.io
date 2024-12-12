const cardsArray = [
    "🍎", "🍎",
    "🍌", "🍌",
    "🍇", "🍇",
    "🍉", "🍉",
    "🍒", "🍒",
    "🥝", "🥝",
    "🍓", "🍓",
    "🍑", "🍑"
];

// Shuffle the cards
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const gameBoard = document.querySelector('.game-board');
let shuffledCards = shuffle([...cardsArray]);
let flippedCards = [];
let matchedCards = [];


function createCard(imageUrl) {
    
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.face = imageUrl;

    const front = document.createElement('div');
    front.classList.add('front');
    front.style.backgroundImage = `url(${imageUrl})`;
    front.style.backgroundSize = 'cover';
    front.style.backgroundPosition = 'center';

    const back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundColor = '#fff'; 

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', () => {
        if (flippedCards.length < 2 && !card.classList.contains('flipped') && !card.classList.contains('matched')) {
            flipCard(card);
        }
    });

    return card;
}


function flipCard(card) {
    card.textContent = card.dataset.face;
    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    const [firstCard, secondCard] = flippedCards;

    if (firstCard.dataset.face === secondCard.dataset.face) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        matchedCards.push(firstCard, secondCard);
        flippedCards = [];
        checkWin();
    } else {
        setTimeout(() => {
            firstCard.textContent = '';
            secondCard.textContent = '';
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}

function checkWin() {
    if (matchedCards.length === cardsArray.length) {
        setTimeout(() => {
            alert("Congratulations! You matched all the cards!");
            resetGame();
        }, 500);
    }
}

function resetGame() {
    shuffledCards = shuffle([...cardsArray]);
    matchedCards = [];
    flippedCards = [];
    gameBoard.innerHTML = '';
    shuffledCards.forEach(face => {
        const card = createCard(face);
        gameBoard.appendChild(card);
    });
}

shuffledCards.forEach(face => {
    const card = createCard(face);
    gameBoard.appendChild(card);
});