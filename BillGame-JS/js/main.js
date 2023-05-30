const input = document.querySelector("input")
const answear = document.querySelector(".answear")
const error = document.querySelector(".error")
const img = document.querySelector("img")

const answears = ["Tak", "Nie", "Może", "Nie chcesz znać odpowiedzi na to pytanie"]

const animation = e => {
  answear.textContent = ""
  error.textContent = ""
  img.classList.add("shake-animation")
  setTimeout(checkContain, 1000)
}

const checkContain = () => {
  if (input.value === "") {
    error.textContent = "Wpisz pytanie w rubrykę"
    answear.textContent = ""
  } else if (input.value.slice(-1) !== "?") {
    error.textContent = "Zakończ zdanie pytajnikiem"
  } else {
    getAnswear()
  }
  img.classList.remove("shake-animation")
}

const getAnswear = () => {
  const randomAnswear = answears[Math.floor(Math.random() * answears.length)]
  answear.textContent = randomAnswear
}

img.addEventListener("click", animation)
