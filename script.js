const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

const animate = (key) => {
    const currentKey = document.querySelector(`.${key}`)
    currentKey.classList.add('pressed')
    setTimeout(() => {
        currentKey.classList.remove('pressed')   
    }, 150)
}

const playMusic = (path) => {
    const audio = new Audio(path);
    audio.play();
}

document.addEventListener('keypress', (e) => {
    const triggeredKey = e.key;
    soundKey(triggeredKey);
    animate(triggeredKey);
})

const soundKey = (key) => {
    switch (key) {
        case "a":
        playMusic('kit-sounds/Kick.wav');
        break;
        case "s":
        playMusic('kit-sounds/Snare.wav');
        break;
        case "d":
        playMusic('kit-sounds/Tom 8in.wav');
        break;
        case "f":
        playMusic('kit-sounds/Tom 10in.wav');
        break;
        case "t":
        playMusic('kit-sounds/Crash.wav');
        break;
        case "y":
        playMusic('kit-sounds/Trash.wav');
        break;
        case "g":
        playMusic('kit-sounds/Floor Tom.wav');
        break;
        case "j":
        playMusic('kit-sounds/Hi Hat Acoustic Closed.wav');
        break;
        case "k":
        playMusic('kit-sounds/Hi Hat Acoustic Open.wav');
        break;
        case "l":
        playMusic('kit-sounds/Ride Cymbal.wav');
        break;
    }
}

function clickKeyDrum(e){
    var innerHTML = e.target.innerHTML; 
    animate(innerHTML)
    soundKey(innerHTML)
    soundKey(innerHTML.touches)
}

var keyDrum = document.querySelectorAll('.drum')
for(let i = 0; i < keyDrum.length; i++){
    keyDrum[i].addEventListener('touchstart', clickKeyDrum);
};

