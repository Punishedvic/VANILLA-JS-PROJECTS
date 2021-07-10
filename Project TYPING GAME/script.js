// INIT 
const start = document.querySelector('#start');
const app = document.querySelector('#app');
const main = document.querySelector('main');
start.addEventListener('click', () => {
    main.style.display = 'none';
    app.style.display = 'block';
    comenzar();
    text.focus();
});


// SELECTORES
const text = document.querySelector('#text');
const word = document.querySelector('#word');
const scoreEl = document.querySelector('#score');
const timeEl = document.querySelector('#time');
const endgameEl = document.querySelector('#end-game-container');
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

function comenzar() {
    if (app.style.display === 'block') {
        const timeInterval = setInterval(updateTime, 1000);
    }
}
// focus en el texto 



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


// actualizar tiempo 
function updateTime() {
    time--;
    timeEl.innerHTML = time + "s";
    if (time === 0) {
        clearInterval();
        // Finalizar tiempo
        gameOver();
    }
}


// Fin del juego!
function gameOver() {
    endgameEl.innerHTML = `
    <h1>Fin del tiempo! dormiste pollo</h1>
    <p>Tu puntaje: ${score}</p>
    <button onclick="location.reload()">Vamo de nuevo</button>
    `;

    endgameEl.style.display = 'flex';
}

addWordToDOM();

// Listeners


// TIPEADO
text.addEventListener('input', e => {
    const insertedText = e.target.value;

    if (insertedText === randomWord) {
        addWordToDOM();
        updateScore();
        // Clear
        e.target.value = '';
        time += 2;
        updateTime();
    }
});