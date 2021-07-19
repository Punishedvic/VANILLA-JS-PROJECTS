const header = document.querySelector('#header');
const title = document.querySelector('#title');
const excerpt = document.querySelector('#excerpt');
const profile_img = document.querySelector('#profile_img');
const author = document.querySelector('#name');
const date = document.querySelector('#date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = ' <img src="/img/steamdeck.webp" alt="" srcset="">';
    title.innerHTML = 'Steam Deck';
    excerpt.innerHTML = 'The brand new Hanheld pc';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" srcset="">';
    author.innerHTML = 'Mario Broda';
    date.innerHTML = 'Jul 17 2021';

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}