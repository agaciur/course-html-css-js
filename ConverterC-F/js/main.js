const converter = document.querySelector("#converter")
const result = document.querySelector(".result")
const convBtn = document.querySelector(".conv")
const resetBtn = document.querySelector(".reset")
const changeBtn = document.querySelector(".change")
const one = document.querySelector(".one")
const two = document.querySelector(".two")

let fahrenheit
let celsius

const swap = () => {
  if (one.textContent === "°C") {
    one.textContent = "°F"
    two.textContent = "°C"
    result.textContent = ''
    
  } else {
    one.textContent = "°C"
    two.textContent = "°F"
    result.textContent = ''
  }
}

const count = () => {
  if (one.textContent === "°C" && converter.value !== '') {
    fahrenheit = converter.value * 1.8 + 32
    result.textContent = `${fahrenheit.toFixed(1)} °F`
    converter.value = ''
  } else if (one.textContent === "°F" && converter.value !== '') {
    celsius = (converter.value  - 32) / 1.8
    result.textContent = `${celsius.toFixed(1)} °C`
    converter.value = ''
  } else {
    result.textContent = 'Musisz podać jakąś wartość'
  }
}

const none = () => {
    converter.value = ''
    result.textContent = ''
}


changeBtn.addEventListener("click", swap)
convBtn.addEventListener("click", count)
resetBtn.addEventListener('click', none )