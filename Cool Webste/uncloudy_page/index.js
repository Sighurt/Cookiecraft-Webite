document.addEventListener('DOMContentLoaded', () => {
    const img = document.getElementById('cookie');
    const c_button = document.getElementById('c_button');
    const cookie_count = document.getElementById('cookie_count');
    let count = 0;

    const cookie_taunt = document.getElementById('cookie_taunt')

    let timer = setInterval(c_cookie, 18000);

    c_button.onclick = function(){
            ypos = -500;
            xpos = getRandomInt(1, 1200);
            count++;
            cookie_count.textContent = count;
            clearInterval(timer);
            timer = setInterval(c_cookie, 18000);
    };

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let ypos = -600;
    let xpos = getRandomInt(1, 1200);
    const speed = 1;

    function c_cookie() {
        const img = document.getElementById('c_button');
        ypos = -600;
        xpos = getRandomInt(1, 1200);
    }

    function cookieFall() {
        ypos += speed;

        img.style.top = ypos + 'px';
        img.style.left = xpos + 'px';

        requestAnimationFrame(cookieFall);
    }

    window.onload = cookieFall;
})