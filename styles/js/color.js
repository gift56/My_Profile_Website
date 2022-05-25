const mainColors = () => {
    const btn = document.querySelectorAll(".btn");
    btn.forEach(but => {
        but.classList.add("mainbg");
        but.classList.remove("mainbg2");
        but.classList.remove("mainbg3");
        but.classList.remove("mainbg4");
        but.classList.remove("mainbg5");
    })

    const bords = document.querySelectorAll("#bord");
    bords.forEach(bord => {
        bord.classList.add("main");
        bord.classList.remove("mainSec");
        bord.classList.remove("mainThird");
        bord.classList.remove("mainFourth");
        bord.classList.remove("mainFifth");
    })

    const proggresIn = document.querySelectorAll(".progress-in");

    proggresIn.forEach(but => {
        but.classList.add("mainbg");
        but.classList.remove("mainbg2");
        but.classList.remove("mainbg3");
        but.classList.remove("mainbg4");
        but.classList.remove("mainbg5");
    })

    const colorMain = document.querySelectorAll(".name");

    colorMain.forEach(name => {

    })
}
const secondColors = () => {
    const bords = document.querySelectorAll("#bord");
    bords.forEach(bord => {
        bord.classList.remove("main");
        bord.classList.add("mainSec");
        bord.classList.remove("mainThird");
        bord.classList.remove("mainFourth");
        bord.classList.remove("mainFifth");
    })

    const btn = document.querySelectorAll(".btn");
    btn.forEach(but => {
        but.classList.remove("mainbg");
        but.classList.add("mainbg2");
        but.classList.remove("mainbg3");
        but.classList.remove("mainbg4");
        but.classList.remove("mainbg5");
    })

    const proggresIn = document.querySelectorAll(".progress-in");

    proggresIn.forEach(but => {
        but.classList.remove("mainbg");
        but.classList.add("mainbg2");
        but.classList.remove("mainbg3");
        but.classList.remove("mainbg4");
        but.classList.remove("mainbg5");
    })

}
const thirdColors = () => {
    const bords = document.querySelectorAll("#bord");
    bords.forEach(bord => {
        bord.classList.remove("main");
        bord.classList.remove("mainSec");
        bord.classList.add("mainThird");
        bord.classList.remove("mainFourth");
        bord.classList.remove("mainFifth");
    })

    const btn = document.querySelectorAll(".btn");
    btn.forEach(but => {
        but.classList.remove("mainbg");
        but.classList.remove("mainbg2");
        but.classList.add("mainbg3");
        but.classList.remove("mainbg4");
        but.classList.remove("mainbg5");
    })

    const proggresIn = document.querySelectorAll(".progress-in");

    proggresIn.forEach(but => {
        but.classList.remove("mainbg");
        but.classList.remove("mainbg2");
        but.classList.add("mainbg3");
        but.classList.remove("mainbg4");
        but.classList.remove("mainbg5");
    })
}
const forthColors = () => {
    const bords = document.querySelectorAll("#bord");
    bords.forEach(bord => {
        bord.classList.remove("main");
        bord.classList.remove("mainSec");
        bord.classList.remove("mainThird");
        bord.classList.add("mainFourth");
        bord.classList.remove("mainFifth");
    })

    const btn = document.querySelectorAll(".btn");
    btn.forEach(but => {
        but.classList.remove("mainbg");
        but.classList.remove("mainbg2");
        but.classList.remove("mainbg3");
        but.classList.add("mainbg4");
        but.classList.remove("mainbg5");
    })

    const proggresIn = document.querySelectorAll(".progress-in");

    proggresIn.forEach(but => {
        but.classList.remove("mainbg");
        but.classList.remove("mainbg2");
        but.classList.remove("mainbg3");
        but.classList.add("mainbg4");
        but.classList.remove("mainbg5");
    })
}
const fifthColors = () => {
    const bords = document.querySelectorAll("#bord");
    bords.forEach(bord => {
        bord.classList.remove("main");
        bord.classList.remove("mainSec");
        bord.classList.remove("mainThird");
        bord.classList.remove("mainFourth");
        bord.classList.add("mainFifth");
    })

    const btn = document.querySelectorAll(".btn");
    btn.forEach(but => {
        but.classList.remove("mainbg");
        but.classList.remove("mainbg2");
        but.classList.remove("mainbg3");
        but.classList.remove("mainbg4");
        but.classList.add("mainbg5");
    })

    const proggresIn = document.querySelectorAll(".progress-in");

    proggresIn.forEach(but => {
        but.classList.remove("mainbg");
        but.classList.remove("mainbg2");
        but.classList.remove("mainbg3");
        but.classList.remove("mainbg4");
        but.classList.add("mainbg5");
    })
}

firstColor.addEventListener("click", mainColors);
secondColor.addEventListener("click", secondColors);
thirdColor.addEventListener("click", thirdColors);
forthColor.addEventListener("click", forthColors);
fifthColor.addEventListener("click", fifthColors);