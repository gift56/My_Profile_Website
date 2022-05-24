const switcherToggler = document.querySelector(".style-toggle");
const dayNight = document.querySelector(".day-night");
let typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Software Engineer", "Aspiring Full Stack", "It's Nice Meeting You..."],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

switcherToggler.addEventListener("click", () => switchContent.classList.toggle("open"));

const closeSwitch = () => {
    if (switchContent.classList.contains("open")) {
        switchContent.classList.remove("open");
    }
}
window.addEventListener("scroll", closeSwitch);


const darkMood = () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
}

window.addEventListener("load", darkMood);
