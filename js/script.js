function toggleHeadlights() {
    const headlight = document.getElementById("headlight");
    if (headlight.style.backgroundColor === "yellow") {
        headlight.style.backgroundColor = "rgba(184, 184, 73, 0.596)";
    } else {
        headlight.style.backgroundColor = "yellow";
    }
}

function toggleTaillights() {
    const taillight = document.getElementById("taillight");
    if (taillight.style.backgroundColor === "red") {
        taillight.style.backgroundColor = "rgba(168, 39, 39, 0.541)";
    } else {
        taillight.style.backgroundColor = "red";
    }
}

function toggleSecondarylights() {
    const secondarylight = document.getElementById("secondarylight");
    if (secondarylight.style.backgroundColor === "orange") {
        secondarylight.style.backgroundColor = "rgba(170, 116, 17, 0.76)";
    } else {
        secondarylight.style.backgroundColor = "orange";
    }
}

let hoodOpen = false;
function toggleHood() {
    const hood = document.getElementById('hood');
    hoodOpen = !hoodOpen;
    hood.style.transform = hoodOpen ? 'rotate(-50deg)' : 'rotate(0deg)';
}

let bellOpen = false;
function toggleBell() {
    const bell = document.getElementById('bell');
    bellOpen = !bellOpen;
    bell.style.transform = bellOpen ? 'rotate(-90deg)' : 'rotate(45deg)';
}

const audio = document.getElementById("miAudio");
const btnMusica = document.getElementById("btnMusica");

function toggleMusica() {
    if (audio.paused) {
        audio.play();
        btnMusica.textContent = "⏸️ Pausar";
    } else {
        audio.pause();
        btnMusica.textContent = "▶️ Reproducir";
    }
}

const btnPuerta = document.getElementById("togglePuerta");
const puerta = document.getElementById("puerta");

btnPuerta.addEventListener("click", () => {
    puerta.style.display = puerta.style.display === "none" ? "block" : "none";
});
