let acHeader = document.querySelector(".accordion__header");

acHeader.addEventListener("click", () => {
    document.querySelector(".accordion").classList.toggle("accordion--open");
});