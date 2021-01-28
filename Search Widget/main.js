let search = document.querySelector('.search');

let btn = document.querySelector('.btn');

let input = document.querySelector('.input');

btn.addEventListener('click', () => {
    search.classList.add('active')
    input.focus()
})