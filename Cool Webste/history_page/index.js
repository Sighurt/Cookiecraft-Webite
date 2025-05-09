const img = document.getElementById('cookie');
const c_button = document.getElementById('cookie');

c_button.onclick = function CookieAdder(){
        ypos = -500;
        xpos = getRandomInt(1, 1200);
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let ypos = -600;
let xpos = getRandomInt(1, 1200);
const speed = 1;

function c_cookie() {
    const img = document.getElementById('cookie');
    ypos = -600;
    xpos = getRandomInt(1, 1200);
}

setInterval(c_cookie, 15000);

function cookieFall() {
    ypos += speed;

    img.style.top = ypos + 'px';
    img.style.left = xpos + 'px';

    requestAnimationFrame(cookieFall);
}

window.onload = cookieFall;