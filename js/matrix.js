import { typeMessage } from "./ui.js";

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
let konamiCodeIndex = 0;

document.addEventListener('keydown', (event) => {
    const keyPressed = event.code;
    if (keyPressed === konamiCode[konamiCodeIndex]) {
        konamiCodeIndex++;
        if (konamiCodeIndex === konamiCode.length) {
            activateEasterEgg();
            konamiCodeIndex = 0;
        }
    } else {
        konamiCodeIndex = 0;
    }
});

function activateEasterEgg() {
    matrix();
}

async function matrix() {
    return new Promise(resolve => {
        const container = document.querySelector(".terminal");
        const gameContainer = document.querySelector('.game-container');

        gameContainer.style.display = 'none';

        const remove = event => {
            event.preventDefault();
            canvas.remove();
            gameContainer.style.display = 'block';
            resolve();
        };

        container.focus();
        container.addEventListener("keypress", remove);
        container.addEventListener("click", remove);
        const canvas = document.createElement("canvas");
        container.appendChild(canvas);

        const ctx = canvas.getContext("2d");
        const w = (canvas.width = container.offsetWidth);
        const h = (canvas.height = container.offsetHeight - 64);
        const cols = Math.floor(w / 20);
        const ypos = Array(cols).fill(0);

        ctx.fillRect(0, 0, w, h);

        function update() {
            ctx.fillStyle = "#0001";
            ctx.fillRect(0, 0, w, h);
            ctx.fillStyle = "#0f0";
            ctx.font = "16pt VT323";

            ypos.forEach((y, ind) => {
                const text = String.fromCharCode(Math.random() * 128);
                const x = ind * 20;
                ctx.fillText(text, x, y);
                if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
                else ypos[ind] = y + 20;
            });
        }
        setInterval(update, 50);
    });
}