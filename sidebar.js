const menu = document.querySelector(".menu-bth");
const toplinks = document.querySelector(".top-links");

menu.addEventListener("click", () => {
    // menu.classList.toggle("active");
    toplinks.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    // menu.classList.remove("active");
    toplinks.classList.remove("active");
}))