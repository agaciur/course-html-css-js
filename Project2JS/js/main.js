const text = document.querySelector("p")
const btnSizeUp = document.querySelector(".sizeUp")
const btnSizeDown = document.querySelector(".sizeDown")
const btnColor = document.querySelector(".color")
let x = 36

const sizeUp = () => {
  if (x > 56) {
    return
  }

  text.style.fontSize = `${++x}px`
}

const sizeDown = () => {
  if (x < 16) {
    return
  }
  text.style.fontSize = `${--x}px`
}


const color = () => {
  let a = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)
  let c = Math.floor(Math.random() * 255)
  text.style.color = `rgb(${a}, ${b}, ${c})`
}

btnSizeUp.addEventListener("click", sizeUp)
btnSizeDown.addEventListener("click", sizeDown)
btnColor.addEventListener("click", color)
