// TYPEWRITER EFFECT
let i = 0;
let txt = 'V HAS COME TO'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.querySelector('#typewriter').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}


//BLUR EFFECT

const bg = document.querySelector('.bg')

let load = 0;
let int = setInterval(blurring, 50)

function blurring() {
    load++
    if (load > 99) {
        clearInterval(int)
    }
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    if (load == 99) {
        typeWriter();
    }
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}