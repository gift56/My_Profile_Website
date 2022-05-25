const mainColors = () => {
    const bords = document.querySelectorAll("#bord");
    bords.forEach(bord => {
        bord.classList.add("main");
        bord.classList.remove("mainSec");
        bord.classList.remove("mainThird");
        bord.classList.remove("mainFourth");
        bord.classList.remove("mainFifth");
    })
}
const secondColors = () => {
    const bords = document.querySelectorAll("#bord");
    bords.forEach(bord => {
        bord.classList.add("mainSec");
        bord.classList.remove("main");
        bord.classList.remove("mainThird");
        bord.classList.remove("mainFourth");
        bord.classList.remove("mainFifth");
    })
}
const thirdColors = () => {
    const bords = document.querySelectorAll("#bord");
    bords.forEach(bord => {
        bord.classList.remove("main");
        bord.classList.remove("mainSec");
        bord.classList.remove("mainFourth");
        bord.classList.remove("mainFifth");
        bord.classList.add("mainThird");
    })
}
const forthColors = () => {
    const bords = document.querySelectorAll("#bord");
    bords.forEach(bord => {
        bord.classList.remove("main");
        bord.classList.remove("mainSec");
        bord.classList.remove("mainThird");
        bord.classList.remove("mainFifth");
        bord.classList.add("mainFourth");
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
}

firstColor.addEventListener("click", mainColors);
secondColor.addEventListener("click", secondColors);
thirdColor.addEventListener("click", thirdColors);
forthColor.addEventListener("click", forthColors);
fifthColor.addEventListener("click", fifthColors);