const hamButton =
document.querySelector(".ham");
hamButton.addEventListener("click", toggleMenu, false);

function toggleMenu() {

    document.querySelector(".navigation").classList.toggle("responsive");
    console.log(document.querySelector("navigation").classList)
}
