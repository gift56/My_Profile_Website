const mainColors = () => {
    const btn = document.querySelectorAll(".backgroundChange");
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
        name.classList.add("mainColor");
        name.classList.remove("mainColor2");
        name.classList.remove("mainColor3");
        name.classList.remove("mainColor4");
        name.classList.remove("mainColor5");
    })

    const hoverIcon = document.querySelectorAll(".hover");

    hoverIcon.forEach(iconH => {
        iconH.classList.add("mainH1");
        iconH.classList.remove("mainH2");
        iconH.classList.remove("mainH3");
        iconH.classList.remove("mainH4");
        iconH.classList.remove("mainH5");
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

    const colorMain = document.querySelectorAll(".name");

    colorMain.forEach(name => {
        name.classList.remove("mainColor");
        name.classList.add("mainColor2");
        name.classList.remove("mainColor3");
        name.classList.remove("mainColor4");
        name.classList.remove("mainColor5");
    })

    const hoverIcon = document.querySelectorAll(".hover");

    hoverIcon.forEach(iconH => {
        iconH.classList.remove("mainH1");
        iconH.classList.add("mainH2");
        iconH.classList.remove("mainH3");
        iconH.classList.remove("mainH4");
        iconH.classList.remove("mainH5");
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

    const colorMain = document.querySelectorAll(".name");

    colorMain.forEach(name => {
        name.classList.remove("mainColor");
        name.classList.remove("mainColor2");
        name.classList.add("mainColor3");
        name.classList.remove("mainColor4");
        name.classList.remove("mainColor5");
    })

    const hoverIcon = document.querySelectorAll(".hover");

    hoverIcon.forEach(iconH => {
        iconH.classList.remove("mainH1");
        iconH.classList.remove("mainH2");
        iconH.classList.add("mainH3");
        iconH.classList.remove("mainH4");
        iconH.classList.remove("mainH5");
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

    const colorMain = document.querySelectorAll(".name");

    colorMain.forEach(name => {
        name.classList.remove("mainColor");
        name.classList.remove("mainColor2");
        name.classList.remove("mainColor3");
        name.classList.add("mainColor4");
        name.classList.remove("mainColor5");
    })

    const hoverIcon = document.querySelectorAll(".hover");

    hoverIcon.forEach(iconH => {
        iconH.classList.remove("mainH1");
        iconH.classList.remove("mainH2");
        iconH.classList.remove("mainH3");
        iconH.classList.add("mainH4");
        iconH.classList.remove("mainH5");
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

    const btn = document.querySelectorAll(".backgroundChange");
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

    const colorMain = document.querySelectorAll(".name");

    colorMain.forEach(name => {
        name.classList.remove("mainColor");
        name.classList.remove("mainColor2");
        name.classList.remove("mainColor3");
        name.classList.remove("mainColor4");
        name.classList.add("mainColor5");
    })

    const hoverIcon = document.querySelectorAll(".hover");

    hoverIcon.forEach(iconH => {
        iconH.classList.remove("mainH1");
        iconH.classList.remove("mainH2");
        iconH.classList.remove("mainH3");
        iconH.classList.remove("mainH4");
        iconH.classList.add("mainH5");
    })
}

firstColor.addEventListener("click", mainColors);
secondColor.addEventListener("click", secondColors);
thirdColor.addEventListener("click", thirdColors);
forthColor.addEventListener("click", forthColors);
fifthColor.addEventListener("click", fifthColors);