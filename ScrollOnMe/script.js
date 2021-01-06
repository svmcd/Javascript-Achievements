let scroll = document.getElementById("scrollTekst");
let reset = document.getElementById("button");
let doubleClick = document.getElementById("doubleClickTekst")

scroll.addEventListener("wheel", () => {
    scroll.style.fontSize = "40px";
    scroll.innerHTML = "Goed gedaan!";
});

reset.addEventListener("click", () => {
    scroll.style.fontSize = "30px";
    scroll.style.color = "white";
    scroll.innerHTML = "Scroll op mij";
    doubleClick.style.fontSize = "30px";
    doubleClick.style.color = "white";
    doubleClick.innerHTML = "Dubbelklik op mij";
});

doubleClick.addEventListener("dblclick" , () => {
    doubleClick.style.fontSize = "40px";
    doubleClick.innerHTML = "Goed gedaan!";
})
