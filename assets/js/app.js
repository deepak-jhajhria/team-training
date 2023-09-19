let mobileView = document.querySelector(".mobileView");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");

menu.addEventListener("click", function () {
    mobileView.classList.toggle("show")
    body.classList.toggle("ovrflowH")
})