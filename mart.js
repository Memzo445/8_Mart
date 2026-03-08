function unlockGift() {
    // Скрываем обложку
    const welcome = document.getElementById('welcome-screen');
    welcome.style.opacity = '0';
    welcome.style.visibility = 'hidden';

    // Показываем контент
    const content = document.getElementById('main-content');
    content.style.visibility = 'visible';
    content.style.opacity = '1';


    // Пытаемся включить музыку сразу (если браузер позволит)
    const music = document.getElementById('zymuranSong');
    music.play().catch(() => console.log("Нужно нажать кнопку музыки вручную"));
}


const CONFIG = {
    momName: 'Анашым',
    authorName: 'Сенің балаң',
    poem: `Анашым, мерекеңмен құттықтаймын,
Көктемдей құлпырып сен жүрші аман.
Жүрегіңде қуаныш көп болсыншы,
Бақытты бол, ардақты асыл анам!
Әр күнің шуақты болсын!`,
    gallery: [
        "https://files.catbox.moe/fr01dw.jpg",
        "https://files.catbox.moe/w7tohb.jpg",
        "https://files.catbox.moe/o6cj44.jpg",
        "https://files.catbox.moe/od2ifx.jpg",
        "https://files.catbox.moe/371l4t.jpg",
        "https://files.catbox.moe/bdl2ac.jpg",
        "https://files.catbox.moe/i8oo1o.jpg",
        "https://files.catbox.moe/z5em56.jpg",
        "https://files.catbox.moe/klz96c.jpg",
        "https://files.catbox.moe/wxwjjz.jpg",
        "https://files.catbox.moe/mh4fvx.jpg",
    ],
    memories: [
        {year: 'Естелік', text: 'Сенің жылы алақаның мен мейірімің бізді әрқашан жылытады.'},
        {year: 'Рахмет', text: 'Әрбір берген ақыл-кеңесің мен қолдауың үшін алғыс айтамын.'},
        {year: 'Тілек', text: 'Жүзіңнен күлкі кетпесін, ең бастысы — денсаулығың мықты болсын!'}
    ]
};

// Настройка данных
document.getElementById('momName').textContent = CONFIG.momName;
document.getElementById('author').textContent = CONFIG.authorName;
document.getElementById('poemPreview').textContent = "Қымбатты, аяулы Анашым! 🌷\n" +
    "\n" +
    "Сізді көктемнің ең шуақты, ең нәзік мерекесі — 8 наурыз мерекесімен шын жүректен құттықтаймын! Сіз менің өмірімдегі ең қымбат, ең мейірімді, ең қамқор жансыз. Сіздің жылы сөзіңіз, мейірімге толы жүрегіңіз және шексіз махаббатыңыз мен үшін әрдайым үлкен күш пен шабыт береді.\n" +
    "\n" +
    "Анашым, сіздің әр күніңіз қуанышқа, шаттыққа және бақытқа толы болсын. Жүрегіңіз әрқашан тыныштық пен жылулыққа толып тұрсын. Деніңіз сау, ғұмырыңыз ұзақ болып, әрдайым бізге күлімдеп қарап отырсаңыз екен деп тілеймін. Сіздің еңбегіңіз бен бізге деген махаббатыңызды ешқашан сөзбен толық жеткізу мүмкін емес.\n" +
    "\n" +
    "Сіз біздің үйіміздің шуағы, берекесі және бақытысыз. Әрбір күніңіз көктемдей жайнап, өміріңіз гүлдей құлпырып тұрсын. Алла сізге зор денсаулық, ұзақ ғұмыр, мол бақыт және шексіз қуаныш нәсіп етсін.\n" +
    "\n" +
    "Мен сізді өте қатты жақсы көремін, Анашым! 💖\n" +
    "Мерекеңіз құтты болсын! 🌸\n";

const gallery = document.getElementById('gallery');
CONFIG.gallery.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.onclick = () => showModal('Сурет', `<img src="${src}" style="width:100%; max-height: 600px; border-radius:10px;">`);
    gallery.appendChild(img);
});

const timeline = document.getElementById('timeline');
CONFIG.memories.forEach(m => {
    const item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = `<div class="dot"></div><div><strong>${m.year}</strong><div style="color:var(--muted); font-size:14px">${m.text}</div></div>`;
    timeline.appendChild(item);
});

function showModal(title, html) {
    const m = document.createElement('div');
    m.style = "position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:999;padding:20px";
    m.innerHTML = `<div style="background:#fff;padding:25px;border-radius:20px;max-width:500px;width:100%;position:relative;">
            <h3 style="margin-bottom:15px">${title}</h3>
            <div>${html}</div>
            <button onclick="this.parentElement.parentElement.remove()" style="margin-top:20px; width:100%" class="btn">Жабу</button>
        </div>`;
    document.body.appendChild(m);
}


// Конфетти
function doConfetti() {
    confetti({particleCount: 150, spread: 70, origin: {y: 0.6}, colors: ['#ff6b81', '#ffffff', '#ffb3c6']});
}

document.getElementById('confettiBtn').onclick = doConfetti;
document.getElementById('surpriseAll').onclick = () => {
    doConfetti();
    showModal('Құттықтаймын!', CONFIG.poem);
};

const music = document.getElementById('zymuranSong');
const musicBtn = document.getElementById('playMusic');

musicBtn.onclick = () => {
    if (music.paused) {
        music.play();
        musicBtn.innerText = "Тоқтату⏸";
        musicBtn.style.background = "#48bb78"; // Зеленый цвет, когда играет
        musicBtn.style.color = "white";
        doConfetti(); // Запускаем конфетти при старте музыки
    } else {
        music.pause();
        musicBtn.innerText = "Өлең оқу ✍️";
        musicBtn.style.background = "#fff";
        musicBtn.style.color = "#0b1220";
    }
};


// Прочие эффекты
document.getElementById('emojiRainBtn').onclick = () => {
    for (let i = 0; i < 30; i++) {
        const e = document.createElement('div');
        e.textContent = '✨';
        e.style = `position:fixed; left:${Math.random() * 100}%; top:-50px; font-size:25px; z-index:1000`;
        document.body.appendChild(e);
        e.animate([{top: '-50px'}, {top: innerHeight + 'px'}], {duration: 2000 + Math.random() * 2000}).onfinish = () => e.remove();
    }
};

document.getElementById('heartsBtn').onclick = () => {
    for (let i = 0; i < 20; i++) {
        const e = document.createElement('div');
        e.textContent = '❤️';
        e.style = `position:fixed; left:50%; top:50%; font-size:30px; z-index:1000`;
        document.body.appendChild(e);
        const x = (Math.random() - 0.5) * 400;
        const y = (Math.random() - 0.5) * 400;
        e.animate([{transform: 'translate(0,0)', opacity: 1}, {
            transform: `translate(${x}px, ${y}px)`,
            opacity: 0
        }], {duration: 1500}).onfinish = () => e.remove();
    }
};

document.getElementById('saveBtn').onclick = () => window.print();

// Гостевая книга
const leaveBtn = document.getElementById('leaveBtn');
leaveBtn.onclick = () => {
    const txt = document.getElementById('guestMsg').value;
    if (txt) {
        const div = document.createElement('div');
        div.style = "background:#fef2f4; padding:10px; border-radius:10px; margin-top:5px; font-size:14px";
        div.textContent = txt;
        document.getElementById('messages').prepend(div);
        document.getElementById('guestMsg').value = '';
        doConfetti();
    }
};


// 2. Функция мощного салюта с двух сторон
function doubleBlast() {
    var duration = 3 * 1000; // 3 секунды
    var end = Date.now() + duration;

    (function frame() {
        // Левый угол
        confetti({
            particleCount: 4,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.8 },
            colors: ['#ff6b81', '#ffb3c6', '#ffffff']
        });
        // Правый угол
        confetti({
            particleCount: 4,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.8 },
            colors: ['#ff6b81', '#ffb3c6', '#ffffff']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}


function startCelebration() {
    const end = Date.now() + 3000; // 3 секунды

    (function frame() {
        // Выстрел слева
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.9 }
        });
        // Выстрел справа
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.9 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// Запуск при входе
window.onload = () => {
    setTimeout(startCelebration, 300);


    // Рисуем падающие лепестки на фоне
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const petals = [];
    for(let i=0; i<200; i++) {
        petals.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            s: Math.random() * 2 + 1,
            r: Math.random() * 15
        });
    }

    function draw() {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(255, 182, 193, 0.5)';
        petals.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
            ctx.fill();
            p.y += p.s;
            if(p.y > canvas.height) p.y = -10;
        });
        requestAnimationFrame(draw);
    }
    draw();
};
