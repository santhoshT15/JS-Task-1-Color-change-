const color = document.getElementById("color")
const inner = document.getElementById("inner")

color.addEventListener("change", () =>{
    inner.style.background = color.value;
})

const red = document.getElementById("red")
const blue = document.getElementById("blue")
const green = document.getElementById("green")
const reset = document.getElementById("reset")

red.addEventListener("click", () =>{
    inner.style.background = red.value;
})

blue.addEventListener("click", () =>{
    inner.style.background = blue.value;
})
green.addEventListener("click", () =>{
    inner.style.background = green.value;
})

reset.addEventListener("click", () =>{
    inner.style.background = reset.value;
})
