let mobileView = document.querySelector(".mobileView");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");
let span1 = document.querySelector(".span1")
let span2 = document.querySelector(".span2")
let span3 = document.querySelector(".span3")

menu.addEventListener("click", function () {
    mobileView.classList.toggle("show");
    body.classList.toggle("ovrflowH");
    span1.classList.toggle("span4");
    span2.classList.toggle("span5");
    span3.classList.toggle("span6");
})