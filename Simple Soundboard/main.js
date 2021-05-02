const sounds = ['who', 'child', 'kaz', 'fiddle'];

sounds.forEach(el => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = el;

    btn.addEventListener('click', () => {
        stopSong()
        document.getElementById(el).play()
    })

    document.querySelector('#buttons').appendChild(btn)
});

function stopSong() {
    sounds.forEach(el => {
        const song = document.getElementById(el)

        song.pause()
        song.currentTime = 0;
    })
}