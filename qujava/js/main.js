const sizeUp = document.querySelector(".size-up")
const sizeDown = document.querySelector(".size-down")
const color = document.querySelector(".color")
const p = document.querySelector("p")

let fonSize = 20

function bigText() {
    fonSize += 5
    p.style.fontSize = fonSize + "px"
}

function smallText() {
    fonSize-=5
    p.style.fontSize = fonSize + "px"

}

function changeColor() {
    p.style.color = 'gold'
}



sizeUp.addEventListener("click", bigText)

sizeDown.addEventListener('click', smallText)

color.addEventListener('click', changeColor)

