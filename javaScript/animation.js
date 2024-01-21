

// scroll progress
let scrollProgress = document.querySelector(".scrollProgress");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
    scrollProgress.style.width = `${window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100}%`;
})

// -----------------------------------------

// scroll to top button
let arrow = document.querySelector(".scrollTop");

window.onscroll = () => {
    window.scrollY > 600 ? arrow.style.display = "block" : arrow.style.display = "none";
}

arrow.onclick = () => {
    window.scrollTo({
        top: 0
    });
}

// ----------------------------------

//setting skills section

// First synching skills rate with their progress bar

// html rate
let html = document.getElementById("html-rate");
let htmlBar = document.getElementById("html-bar");
htmlBar.style.width = 0

// css rate
let css = document.getElementById("css-rate");
let cssBar = document.getElementById("css-bar");
cssBar.style.width = 0

// JavaScript rate
let JS = document.getElementById("JS-rate");
let JSBar = document.getElementById("JS-bar");
JSBar.style.width = 0

// python rate
let python = document.getElementById("python-rate");
let pythonBar = document.getElementById("python-bar");
pythonBar.style.width = 0


// second make progress bar start moving when we reach the section for the first time

const skillsSection = document.getElementById("skills");
let bar = document.querySelector(".progress-data");

window.addEventListener("scroll" , () => {
    if (window.scrollY >= skillsSection.offsetTop - 100) {
        htmlBar.style.width = html.innerHTML
        cssBar.style.width = css.innerHTML
        JSBar.style.width = JS.innerHTML
        pythonBar.style.width = python.innerHTML
    }});

// -----------------------------------


// setting countdown timer 

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let targetDate = new Date("2025 1 1 10:00:00").getTime();



let counter = setInterval(() => {
    let dateNow = new Date().getTime()
    dateDiff = targetDate - dateNow;

    const addDay = Math.floor(dateDiff / day);
    document.querySelector(`.days`).innerHTML = addDay;

    const addHour = Math.floor((dateDiff % day) / hour);
    document.querySelector(`.hours`).innerHTML = addHour;

    const addMin = Math.floor((dateDiff % hour) / minute);
    document.querySelector(`.min`).innerHTML = addMin < 10 ? `0${addMin}` : addMin;

    const addSec = Math.floor((dateDiff % minute) / second);
    document.querySelector(`.sec`).innerHTML = addSec < 10 ? `0${addSec}` : addSec;
},1000);

if (dateDiff = 0) {
    clearInterval(counter);
    console.log(`timer is done`)
}


// --------------------------------------

// setting stats animation
const statsSection = document.querySelector("#stats");
let stats = document.querySelectorAll("#stats-number");
let started = false;



window.addEventListener("scroll" ,() => {
    if (window.scrollY >= statsSection.offsetTop - 500) {
        if (!started) {
            stats.forEach((counter) => startCounter(counter));
        }
        started = true;
    }
})

function startCounter(val) {
    let target = val.dataset.stats;
    let count = setInterval(() => {
        val.textContent++;
        if (val.textContent == target) {
            clearInterval(count);
        }
    }, 500 / target);
};