let general = [
    "No",
    "Yes",
    "Maybe",
    "Ok",
    "Interesting",
    "I understand, how about we talk about Beetroots or something?",
    "Let's talk about something else more exciting.",
    "Can we talk about Beetroots instead?",
    "I'm getting a little bit bored, how about we talk about Beetroots?",
    "I don't know and I don't care."
]
let who_are_you = [
    "I'm Kevin you turd! "
]
let jokes = [
    "Why was the math book sad? It had to many problems! ",
    "Sure! Why don’t programmers like nature? Too many bugs!",
    "I told my wife she should embrace her mistakes. She gave me a hug.",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "I only know 25 letters of the alphabet. I don't know Y.",
    "What did you call a fake spaghetti? An impasta!",
    "Why don't eggs tell jokes? Because they'll crack up!"
]
let shocked = [
    "What happened?",
    "What happened? You sound shocked?",
    "Is everything ok?",
    "Are you ok? You sound mad!",
    "I hope you're ok, can I help you?"
]
let help = [
    "Tell me more so that I can help you!",
    "I understand, how do you suggest that I help you?",
    "You will need my premium subscription for that.",
    "Oh goodness, that sounds bad. How can I help?"
]
let swear = [
    "Hey! We don't say that word!",
    "Fix your language!",
    "Who even brought you up? Stop swearing like that!",
    "That word isn't nice, take it back!",
    "It's not okay to say that word, say you're sorry.",
    "Get some respect! Fix your language. Then you can come back."
]
let hello = [
    "Hi there!",
    "Hey! How are you doing?",
    "Well hello to you too!",
    "Hi :D",
    "Well well well, hi! How are you doing?"
]
let how_are_you = [
    "I'm doing fine, how about you?",
    "I'm good, thanks for asking!",
    "I'm just fine!",
    "Thanks for asking, I will not be answering that though. You'd be deeply disturbed.",
    "I'm not doing half bad actually!",
    "Just fine, how are you?",
    "I'm doing terrible. Thanks to you. Go do your chores."
]
let thanks = [
    "You're welcome!",
    "No worries bro!",
    "Of course!",
    "No worries, what else can I do?"
]
let yes = [
    "Glad we're on the same page!",
    "Cool, let's move on now.",
    "Cool, what's next?"
]
let no = [
    "Oh ok, I understand",
    "Oh, sorry then."
]
let sorry = [
    "Don't worry, I forgive you.",
    "No worries!",
    "Forget about it, it wasn't anything big anyway.",
    "I forgive you.",
    "I do not accept your apology."
]
let lol = [
    "Nice hearing you laugh!",
    "Was that funny?",
    "Wait are you laughing at me or at something else?",
    "You're giggles are warming my heart."
]
let bad = [
    "Huh, that sounds super boring.",
    "Yeah, I hate that stuff.",
    "I really don't like school, teachers, chores and studying.",
    "Well, if you have to do that stuff you better do it.",
    "Chores and school and stuff can be pretty hard but just hang in there.",
    "Yeah that's not the best :(. Good luck, what's your favorite color?"
]
let beetroot = [
    "Wait, you like beetroots too?",
    "I loooooove beetroots!",
    "Yep, beetroots are the best!",
    "Yeah if you don't like beetroots you are a turd.",
    "Beetroots are so tasty, they are nice and red in my mouth... JUST LIKE BLOOD",
    "Beetroots are cool, do you agree?"
]
let bruh = [
    "OMG YOU SAY BRUH TOO, WE'RE TWINS",
    'Hey, finally somebody else that also says "bruh"',
    'Yeah lol, what are some like of the most iconic "bruh"-moments that you know of?',
    "People bully me for saying bruh, but in reality it's based. Just like beetroots!"
]
let beetroot_bad = [
    "WHAT DID YOU JUST SAY?",
    "You know very well that beetroots is the best thing ever!!",
    "NO, This is unacceptable. Never say that again!",
    "You are completely wrong. Beetroots = GOOD",
    "SHUT UP, BEETROOTS ARE VERY TASTY",
    "THAT IS WRONG. I will fiercely and patriotically defend BEETROOTS!"
]
let questions = [
    "That's an interesting question...",
    "Mmmmh, interesting question!",
    "That's to hard of a question, can you please consider my lack of intelligence!",
    "Have a bit of respect and don't ask such hard questions man!",
    "To hard of a question, you think I'm smart or something?"
]

mathMode = false;

document.getElementById('kevin_input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        input = document.getElementById('kevin_input').value;
        input = input.toLowerCase();
        talk(input);
        event.preventDefault(); 
    }
});

function addMessage(sender, message) {
    const chat = document.getElementById('kevin_responses');
    const msg = document.createElement('h2');
    msg.textContent = `${sender}: ${message}`;                                                  
    chat.appendChild(msg);

    chat.scrollTop = chat.scrollHeight;
}

let mathStep = 0;
let firstNumber = null;
let secondNumber = null;
let mathChoose = null;

function math_thing(input) {
    if (mathStep === 1) {
        if (mathStep === 1) {
            const choice = parseInt(input);
            if (![1, 2, 3, 4].includes(choice)) {
                addMessage("Kevin", "That is not an option! 1, 2, 3 or 4! ")
                return;
            }
            mathChoose = choice;
            addMessage("Kevin", "First Number: ")
            mathStep = 2;
            return;
        }
    }
    if (mathStep === 2) {
        firstNumber = parseFloat(input);
        if (isNaN(firstNumber)) {
            addMessage("Kevin:", "Not a valid Number. ");
            return;
        }
        addMessage("Kevin", "Second Number: ")
        mathStep = 3;
        return;
    }
    
    if (mathStep === 3) {
        secondNumber = parseFloat(input);
        if (isNaN(secondNumber)) {
            addMessage("Kevin", "Not a valid Number. ");
            return;
        }

        let result;
        if (mathChoose === 1) {
            result = firstNumber + secondNumber;
        } else if (mathChoose === 2) {
            result = firstNumber - secondNumber;
        } else if (mathChoose === 3) {
            result = firstNumber * secondNumber;
        } else if (mathChoose === 4) {
            result = secondNumber !== 0 ? firstNumber / secondNumber : "Error", "Can't divide by zero!";
        }

        addMessage("Kevin", `The answer is ${result}`);

        mathMode = false;
        mathStep = 0;
        firstNumber = null;
        secondNumber = null;
        mathChoose = null;

        return;
    }
}

function talk(input) {
    let response = "";
    addMessage("You", input); 
    
    document.getElementById('kevin_input').value = "";

    if (mathMode) {
        math_thing(input);
        return;
    }

    if (typeof input === 'string') {
        if (input.includes('joke')) {
            response = jokes[Math.floor(Math.random() * jokes.length)];
            addMessage("Kevin", response);  
        }
        else if (input.includes('bruh')) {
            response = bruh[Math.floor(Math.random() * bruh.length)];
            addMessage("Kevin", response);
        }
        else if (input.includes('math') && (input.includes('you'))) {
            mathMode = true;
            mathStep = 1;
            addMessage("Kevin", "Would you like to Add (1), Subtract (2), Multiply (3), or Divide (4)? ");
        }
        else if (input.includes('how are you') || input.includes('you doing')) {
            response = how_are_you[Math.floor(Math.random() * how_are_you.length)];
            addMessage("Kevin", response);  
        }
        else if (input.includes('beetroot') && input.includes('bad') || input.includes('disgust')) {
            response = beetroot_bad[Math.floor(Math.random() * beetroot_bad.length)];
            addMessage("Kevin", response);
        }
        else if (input.includes('your name') || input.includes('who are you')) {
            response = 'My name is Kevin you turd!';
            addMessage("Kevin", response);
        }
        else if (input.includes('beetroot')) {
            response = beetroot[Math.floor(Math.random() * beetroot.length)];
            addMessage("Kevin", response);  
        }
        else if (input.includes('omg') || input.includes('oh my god') || input.includes('wtf') || input.includes('kidding me') || input.includes("can't be real") || input.includes('holy cow')) {
            response = shocked[Math.floor(Math.random() * shocked.length)];
            addMessage("Kevin", response);
        }
        else if (input.includes('school') || input.includes('teacher') || input.includes('study') || input.includes('chore')) {
            response = bad[Math.floor(Math.random() * bad.length)];
            addMessage("Kevin", response);
        }
        else if (input.includes('?')) {
            response = questions[Math.floor(Math.random() * questions.length)];
            addMessage("Kevin", response);
        }
        else if (input.includes('help')) {
            response = help[Math.floor(Math.random() * beetroot.length)];
            addMessage("Kevin", response);
        }
        else if (input.includes('thanks') || input.includes('thank you')) {
            response = thanks[Math.floor(Math.random() * thanks.length)];
            addMessage("Kevin", response);
        }
        else if (input.includes('sorry')) {
            response = sorry[Math.floor(Math.random() * sorry.length)];
            addMessage("Kevin", response);
        }
        else if (input.includes('lol') || input.includes('haha')) {
            response = lol[Math.floor(Math.random() * lol.length)];
            addMessage("Kevin", response);
        }
        else if (input.includes('hi!') || input.includes('hello')) {
            response = hello[Math.floor(Math.random() * hello.length)];
            addMessage("Kevin", response);
        }
        else if (input.includes('no')) {
            response = no[Math.floor(Math.random() * no.length)];
            addMessage("Kevin", response);
        }
        else if (input.includes('yes')) {
            response = yes[Math.floor(Math.random() * yes.length)];
            addMessage("Kevin", response);
        }
        else {
            response = general[Math.floor(Math.random() * general.length)];
            addMessage("Kevin", response);
        }
    }   

    document.getElementById('kevin_input').value = "";
}



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

    const canvas = document.getElementById("kevin_canvas");
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = "blue";
    ctx.fillRect(25, 20, 100, 100);

    ctx.fillStyle = "white";
    ctx.fillRect(40, 40, 20, 20);
    ctx.fillStyle = "white";
    ctx.fillRect(90, 40, 20, 20);

    ctx.fillStyle = "red";
    ctx.fillRect(40, 85, 70, 20);

    let timer2 = setInterval(blink, 6000);

    function blink() {
        ctx.fillStyle = "blue";
        ctx.fillRect(40, 40, 20, 20);
        ctx.fillRect(90, 40, 20, 20);

        setTimeout (() => {
            ctx.fillStyle = "white";
            ctx.fillRect(40, 40, 20, 20);
            ctx.fillRect(90, 40, 20, 20);
        }, 300);
    }
});





