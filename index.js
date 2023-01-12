const items = document.querySelectorAll(".colorous__item");
const refreshBtnNode = document.querySelector(".js-changer");

const btnItems = document.querySelectorAll(".colorous__item button");
btnItems.forEach(item => {
    item.addEventListener('click', function() {
        const icon = this.querySelector("i");
        icon.classList.toggle("uil-lock");
        icon.classList.toggle("uil-unlock");
    });
});

document.addEventListener("keydown", function(e) {
    e.preventDefault();
    if(e.code.toLowerCase() === "space") setBgColor();
});

refreshBtnNode.addEventListener("click", function() {
    setBgColor();
});

function copyText() {
    return navigator.clipboard.writeText(this.innerHTML);
}

function setBgColor() {
    items.forEach(item => {
        if (item.querySelector("button > i").classList.contains("uil-lock")) return;
        const color = chroma.random();
        const btn = item.querySelector('button');
        const text = item.querySelector('span');
        text.addEventListener('click', copyText);
        const luminance = chroma(color).luminance();
        text.style.color = luminance > .5 ? "black" : "white";
        btn.style.color = luminance > .5 ? "black" : "white";
        text.innerHTML = color;
        item.style.background = color;
    });
};

setBgColor();

