const switcherToggler = document.querySelector(".style-toggle");

switcherToggler.addEventListener("click", () => switchContent.classList.toggle("open"));

const closeSwitch = () => {
    if (switchContent.classList.contains("open")) {
        switchContent.classList.remove("open");
    }
}
window.addEventListener("scroll", closeSwitch);
