const items = document.querySelectorAll(".colorous__item");
const refreshBtnNode = document.querySelector(".js-changer");

document.addEventListener("keydown", function(e) {
    e.preventDefault();
    if(e.code.toLowerCase() === "space") setBgColor();
});

refreshBtnNode.addEventListener("click", function() {
    setBgColor();
});

function setBgColor() {
    items.forEach(item => {
        const color = chroma.random();
        const btn = item.querySelector('button');
        const text = item.querySelector('span');
        const luminance = chroma(color).luminance();
        text.style.color = luminance > .5 ? "black" : "white";
        btn.style.color = luminance > .5 ? "black" : "white";
        text.innerHTML = color;
        item.style.background = color;
    });
};

setBgColor();

