// const name = 'Agata';
// const namePet = 'Kicia';

// console.log(`Cześć, jestem ${name}, a to jest ${namePet} - mój kot.`);

// const agePet = 4

// console.log(namePet + ' ma już ' + agePet + ' lata!');

// const firstName = 'Tomek'
// let age = 12
// age = 18
 
// const favColor = 'niebieski'
// const favMeal = 'schabowy'
 
// let currentCar
// currentCar = 'Audi'
 
// let secondName = 'Ania'
// let age2 = 24
// let favColor2 = 'czerwony'

// const text1 = 'powiększ mnie!'
// const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
// const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
// const text4 = 'sprawdź, czy zawieram słowo "czy"'
// const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
// const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
// const text7 = 'podziel, ten, string, od, przecinków'

// console.log(text1.toUpperCase());
// console.log(text2.toLowerCase());
// console.log(text3.substring(6))
// console.log(text4.includes("czy"))
// console.log(text5.charAt(2))
// console.log(text6.replaceAll('pies','kot'))
// console.log(text7.split(","));

// const pass = '87yshfks'

// if (pass.length > 10 && pass.includes('!')) {
//     console.log('Masz rewelacyjne hasło')
// } else if (pass.length > 10) {
//     console.log('Masz dobre hasło')
// } else {
//     console.log('Masz za krótkie hasło')
// }

// const day = 'poniedziałek'

// switch (day) {
//     case 'poniedziałek':
//         console.log('Dziś jest poniedziałek')
//         break
//     case 'wtorek':
//         console.log('Dziś jest wtorek')
//         break
//     case 'środa':
//         console.log('Dziś jest środa')
//         break
//     case 'czwartek':
//         console.log('Dziś jest czwartek')
//         break
//     case 'piątek':
//         console.log('Dziś jest piątek')
//         break
//     default:
//         console.log('Weekend!')
// }

// const x = 100

// if (x > 20) {
// 	console.log(`${x} > 20`)
// } else {
// 	console.log(`${x} < 20`)
// }

// // wartość ? true:false

// const newX = (x>20) ? `${x} > 20` : `${x} < 20`

// console.log(newX)

// zadania

// let x = 50
// let y = 30

// if(x > y) {
//     console.log(`${x} > ${y}`)
// }

// const color = 'blue'
// const newColor = 'green'

// if (color === newColor) {
//     console.log("Kolory się zgadzają")
// } else {
//     console.log("Kolory się nie zgadzają")
// }

// let x = 100
// let y = 50

// if(x > y) {
//     console.log(`${x} > ${y}`)
// } else if(x === y) {
//     console.log(`${x} = ${y}`)
// } else {
//     console.log(`${x} < ${y}`)
// }

// const promo = '70%'

// switch (promo) {
//     case '10%':
//         console.log('Dziś mamy 10% zniżki')
//     break
//     case '20%':
//         console.log('Dziś mamy 20% zniżki')
//     break
//     case '30%':
//         console.log('Dziś mamy 30% zniżki')
//     break
//     default:
//         console.log(`Dziś mamy ${promo} zniżki`)
// }

// 1/ stwarzamy zmienną x i przypisujemy do niej wartość 10
// 2/ za pomocą operatora warunkowego sprawdź, czy x jest parzyste
// 3/ w konsoli wpisz odpowiednią informację na, że "x jest parzyste"

// const x = 10

// const newX = (x % 2 === 0) ? 'x jest parzyste' : 'x jest nieparzyste'
// console.log(newX) 

// const x = 50

// if (x >= 100) {
//     console.log(`x > 100`.toUpperCase())
// } else if(x < 100 && x > 30) {
//     console.log('x jest średniakiem'.toUpperCase())
// } else {
//     console.log('x jest mały'.toLocaleUpperCase())
// }

// lub

const x = 50
let text

if (x >= 100) {
    text = 'x > 100'
} else if(x < 100 && x > 30) {
    text = 'x jest średniakiem'
} else {
    text = 'x jest mały'
}

console.log(text.toUpperCase())