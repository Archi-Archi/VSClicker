//  scores
click = document.getElementById('clickthing');
score = document.getElementById('amount');
lpscounter = document.getElementById('persec');
win = document.getElementById('win')
let scorenum = 0;
let persec = 0;
let timer = 0;
let wincondition = 0;

click.addEventListener('click', () => {
    scorenum += 1;
    score.textContent = scorenum
});

// buttons
steam = document.getElementById('steam')
htmlbtn = document.getElementById('htmlbuy')
cssbtn = document.getElementById('cssbuy')
jsbtn = document.getElementById('jsbuy')
phpbtn = document.getElementById('phpbuy')
luabtn = document.getElementById('luabuy')
pythonbtn = document.getElementById('pythonbuy')
csbtn = document.getElementById('csbuy')
cppbtn = document.getElementById('cppbuy')
javabtn = document.getElementById('javabuy')

ahtml = document.getElementById('amountofhtml')
let html = 0;
acss = document.getElementById('amountofcss')
let css = 0;
ajs = document.getElementById('amountofjs')
let js = 0;
aphp = document.getElementById('amountofphp')
let php = 0;
alua = document.getElementById('amountoflua')
let lua = 0;
apython = document.getElementById('amountofpython')
let python = 0;
acs = document.getElementById('amountofcs')
let cs = 0;
acpp = document.getElementById('amountofcpp')
let cpp = 0;
ajava = document.getElementById('amountofjava')
let java = 0;

htmlbtn.addEventListener('click', () => {
    if (scorenum >= 10) {
        scorenum -= 10;
        persec += 1;
        html += 1;
        ahtml.textContent = html
        score.textContent = scorenum
        lpscounter.textContent = persec
    }
})
cssbtn.addEventListener('click', () => {
    if (scorenum >= 100) {
        scorenum -= 100;
        persec += 5;
        css += 1;
        acss.textContent = css
        score.textContent = scorenum
        lpscounter.textContent = persec
    }
})
jsbtn.addEventListener('click', () => {
    if (scorenum >= 500) {
        scorenum -= 500;
        persec += 20;
        js += 1;
        ajs.textContent = js
        score.textContent = scorenum
        lpscounter.textContent = persec
    }
})
phpbtn.addEventListener('click', () => {
    if (scorenum >= 750) {
        scorenum -= 750;
        persec += 50;
        php += 1;
        aphp.textContent = php
        score.textContent = scorenum
        lpscounter.textContent = persec
    }
})
luabtn.addEventListener('click', () => {
    if (scorenum >= 1000) {
        scorenum -= 1000;
        persec += 100;
        lua += 1;
        alua.textContent = lua
        score.textContent = scorenum
        lpscounter.textContent = persec
    }
})
pythonbtn.addEventListener('click', () => {
    if (scorenum >= 2500) {
        scorenum -= 2500;
        persec += 200;
        python += 1;
        apython.textContent = python
        score.textContent = scorenum
        lpscounter.textContent = persec
    }
})
csbtn.addEventListener('click', () => {
    if (scorenum >= 5000) {
        scorenum -= 5000;
        persec += 300;
        cs += 1;
        acs.textContent = cs
        score.textContent = scorenum
        lpscounter.textContent = persec
    }
})
cppbtn.addEventListener('click', () => {
    if (scorenum >= 20000) {
        scorenum -= 20000;
        persec += 500;
        cpp += 1;
        acpp.textContent = cpp
        score.textContent = scorenum
        lpscounter.textContent = persec
    }
})
javabtn.addEventListener('click', () => {
    if (scorenum >= 100000) {
        scorenum -= 100000;
        persec += 850;
        java += 1;
        ajava.textContent = java
        score.textContent = scorenum
        lpscounter.textContent = persec
    }
})

steam.addEventListener('click', () => {
    if (wincondition == 1) {
        win.textContent = "Congratulations, you uploaded your game to Steam! You have won VSClicker."
    }
})




setInterval(() => {
    scorenum += persec;
    score.textContent = scorenum;
    if (scorenum >= 1000000) {
        steam.src = "assets/Steam_icon_logo.png"
        wincondition = 1;
    }
}, 1000);
