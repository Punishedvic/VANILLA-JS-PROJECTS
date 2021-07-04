// SELECTORES
const word = document.querySelector('#word');
const text = document.querySelector('#text');
const scoreEl = document.querySelector('#score');
const timeEl = document.querySelector('#time');
const endgameEl = document.querySelector('#end-game');
const settingsBtn = document.querySelector('#settings-btn');
const settings = document.querySelector('#settings');
const settingsForm = document.querySelector('#settings-form');
const difficultySelect = document.querySelector('#difficulty');

// lista de palabras
const words = [
    'perro',
    'elegante sport',
    'ktm',
    'encapsulado',
    'pistola',
    'cumbia 420',
    'chetos',
    'joseamo',
    'riquitillo',
    'pasillos',
    'keloke',
    'bellaquera',
    'patrona',
    'bacaneo',
    'humo',
    'nota',
    'luqueando',
    'letra',
    'rutina'
];

// Comenzar palabras

let randomWord;

// Comenzar puntaje

let score = 0;

// Comenzar temporizador
let time = 10;


// Genera palabra random
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// añade palabra al DOM

function addWordToDOM() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

// actualizar SCORE

function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}

addWordToDOM();

// Listeners

text.addEventListener('input', e => {
    const insertedText = e.target.value;

    if (insertedText === randomWord) {
        addWordToDOM();
        updateScore();
        // Borrar ultimo dato
        e.target.value = '';
    }
});