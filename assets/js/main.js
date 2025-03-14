
const listItems = document.querySelectorAll("li");

listItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        const figure = item.querySelector("figure");
        figure.classList.add("animate-in");
        figure.classList.remove("animate-out");
    });
    item.addEventListener("mouseleave", () => {
        const figure = item.querySelector("figure");
        figure.classList.add("animate-out");
        figure.classList.remove("animate-in");
    });
});






















