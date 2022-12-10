// const name = "Agata"
// const age = 34
// const food = "pizza"

// console.log(`Cześć, jestem ${name}, lubię jeść ${food}. Mam ${age} lat`)

// const favColor = "red"
// const meal = "schabowy"
// const favDrink = "pepsi"
// const number = 123

// // 1. Stwórz zmienną "SCORE". Zmienna "SCORE" ma przechowywać informację, czy 15 jest liczbą parzystą, czy nieparzystą.

// // Skorzystaj z modulo. Zmienną "SCORE" wyloguj w konsoli (powinna zostać wylogowana cyfra 1).

// let score = 15 % 2
// console.log(score)

// // 2. Stwórz zmienną "NUM1" i przypisz do niej wartość 8.

// // Za pomocą inkrementacji, zwiększ wartość zmiennej "NUM1" do 10. Wynik wyloguj w konsoli.

// let num1 = 8
// num1++
// num1++
// console.log(num1)

// // 3. Stwórz zmienne "X" oraz "Y". Przypisz do nich liczby 5 oraz 10.

// // Następnie za pomocą operatorów przypisania (zapis skrócony), wypisz w konsoli wynik mnożenia oraz dzielenia "X" przez "Y".

// let x = 5
// let y = 10
// console.log((x *= y))
// console.log((x /= y))

// const passLength = 8

// if (passLength >= 10) {
//     console.log('Masz bardzo dobre hasło!')
// } else if (passLength > 5 && passLength < 10) {
//     console.log('Masz dobre hasło.')
// } else {
//     console.log('Masz słabe hasło...')
// }

// const fruits = ['jabłko', 'gruszka', 'śliwka', 'banan']

// for (let i = 0; i < 3; i++) {
//     console.log(fruits[i])
// }

// function addNumbers (x,y) {
//     return x + y
// }

// const numbers = [1, 2, 3, 4, 5, 6]

// for (let i = 0; i <= numbers.length; i++) {
//     console.log(numbers[i])
// }

// function number(x, y, z) {
//     console.log (x + y * z)
// }
// number(1,2,3)

// if (numbers.length > 5) {
//     console.log("true")
// } else {
//     console.log("false")
// }

const btn1 = document.querySelector('#btn1')
// console.log(btn1);

const btn2 = document.querySelector('.btn2')
// console.log(btn2);

function handleClick() {
    console.log ('Kliknięto przycisk nr 1');
}

function add(){
    console.log(2 + 2);
}

btn1.addEventListener('click', handleClick)

btn2.addEventListener('click', add)