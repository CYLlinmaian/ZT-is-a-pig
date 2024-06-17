const phrases = ["胸小", "脾气大", "贪吃", "懒惰", "爱打呼", "爱生气", "傻乎乎", "慢半拍", "爱撒娇", "总是迟到"];
const titleElement = document.getElementById("title");

function getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}

function iAm() {
    alert("你承认了！");
    changeTitle();
}

function iAmNot() {
    alert("你在骗自己！");
    changeTitle();
}

function youAreUrgent() {
    alert("你急了，别急嘛~");
    changeBackground();
}

function changeTitle() {
    const newPhrase = getRandomPhrase();
    titleElement.textContent = `宗婷你是${newPhrase}`;
}

function changeBackground() {
    const gradients = [
        'linear-gradient(135deg, #ff6f61, #ff9a8b)',
        'linear-gradient(135deg, #6a11cb, #2575fc)',
        'linear-gradient(135deg, #00c6ff, #0072ff)',
        'linear-gradient(135deg, #43e97b, #38f9d7)',
        'linear-gradient(135deg, #ff758c, #ff7eb3)',
        'linear-gradient(135deg, #f5a623, #f76b1c)'
    ];
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    document.body.style.background = randomGradient;
}
