const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear')
const addContainer = document.getElementById('add-container');

//  keep track of cureent card
let currentActiveCard = 0;


// Storew Dom cards
const CardsEl = [];

// Store card data 
const cardsData = [
    {
        question: 'What must a variable begin with?',
        answer: 'A letter, $ or _'
    },
    {
        question: 'What must a variable begin with?',
        answer: 'A letter, $ or _'
    },
    {
        question: 'Example of Case Sensitive Variable',
        answer: 'thisIsАVariable'
    }
];


//  Create all  cards
function createCards() {
    cardsData.forEach((data, index) => createCard(data, index))
}
// creaye a single card im Dom
function createCard(data, index) {
    const card = document.createElement('div');
    card.classList.add('card');
    if (index === 0) {
        card.classList.add('active');
    }
    card.innerHTML = `
    <div class="inner-card">
    <div class="inner-card-fornt">
        <p>
            ${data.question}
        </p>
    </div>
    <div class="inner-card-back">
        <p>
            ${data.answer}
        </p>
    </div>
</div>`;

    // Add tp Dom Cards
    CardsEl.push(card);
    cardsContainer.appendChild(card);
}


createCard();
