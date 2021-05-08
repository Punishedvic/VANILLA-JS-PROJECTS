const boton = document.querySelectorAll('button');
for (e of boton) {
    e.classList.add('faq-toggle');
}

const toggle = document.querySelectorAll('.faq-toggle');


toggle.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    })
})