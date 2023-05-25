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

// const x = 50
// let text

// if (x >= 100) {
//     text = 'x > 100'
// } else if(x < 100 && x > 30) {
//     text = 'x jest średniakiem'
// } else {
//     text = 'x jest mały'
// }

// console.log(text.toUpperCase())

// for (let i = 0; i < 6; i++) {

// }

// const colors = ['black', 'pink', 'white']

// for (let i =0; i < colors.length; i++) {
//     console.log(colors[i])
// }

// let i = 0

// while (i < 5) {
//     console.log(i)
//     i++
// }

// let i = 0

// do {
//     i++
//     console.log(i)
// } while (i < 2)

// const numbers = [1, 2, 3, 4, 5]

// // for (let i = 0; i < numbers.length; i++) {
// //     console.log(numbers[i] * 2)
// // }

// for (const number of numbers) {
//     console.log(number * 2);
// }

// zadania:

// const cities = ['New York', "Rotterdam", 'London', 'Rome']

// for(let i = 0; i < cities.length; i++) {
//     console.log(`To miasto nazywa się  + ${cities[i].toUpperCase()}`)
// }

// let x = 0

//  while (x <= 10) {
//     x += 2
//     console.log(x)
//  }

// let x = 20

// do {
//     x -= 3
// } while (x > 0)

// console.log(x)

// const numbers = [5, 8, 10, 23, 48, 60]

// for (const number of numbers) {
//     console.log(number / 5);
// }

// for (const number of numbers) {
//     if (number % 2 == 0) {
//         console.log('Liczba jest parzysta')
//     } else {
//         console.log('Liczba jest nieparzysta')
//     }
// }

// tablice

// const numbers = [1,2,3,4,5,6]

// // Zamiast:
// const btn1 = document.querySelector('button:nth-of-type(1)')
// const btn2 = document.querySelector('button:nth-of-type(2)')
// const btn3 = document.querySelector('button:nth-of-type(3)')

// // można:

// const btns = document.querySelectorAll('button')
// // jest to element tablico-podobny

// // i zamiast wywoływać pojedynczo przyciski:
// function btnMsg(e) {
//     console.log(`Kliknięto ${e.target.textContent} !`)
// }
// btn1.addEventListener('click', btnMsg)
// btn2.addEventListener('click', btnMsg)
// btn3.addEventListener('click', btnMsg)

// // wywołujemy wszystkie:

// btns.forEach(btn => btn.addEventListener('click', btnMsg))

// const numbers = [1,2,3,4,5]

// numbers.unshift(100, 200)
// numbers.shift()
// numbers.push(322)
// numbers.pop()

// const colors = []
// console.log(colors)
// colors.unshift('black')
// console.log(colors)
// colors.push('white')
// console.log(colors)
// colors.shift()
// colors.pop()
// console.log(colors)

// const numbers = [1, 2, 3, 4, 5]

// function multiply(x) {
//     return x * 2
// }

// const newNumbers = numbers.map(multiply)

// console.log(numbers);
// console.log(newNumbers);

// const abc = ['a', 'b', 'c']
// const newAbc = numbers.concat(abc)
// console.log(newAbc)

// const drinks = ['pepsi', 'kawa', 'sok']
// const meals = ['schabowy', 'spaghetti', 'zupa']

// const menu = [...drinks, ...meals]
// console.log(menu)

// Treść zadania:
// Skopiuj poniższy kod do pliku .js.

// const numbers = [0, 0, 1, 1, 2, 2, 2]
// const colors = ['red', 'green', 'blue', true, 123]
// const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']
// Stwórz zmienną numbers2 i za pomocą metody slice, wytnij z tablicy numbers pierwsze dwa zera.

// Następnie stwórz numbers3 i za pomocą metody slice, wytnij trzy ostatnie dwójki z tablicy numbers. Jeśli nie wiesz jak to zrobić, dokumentacja na MDN z pewnością pomoże. 🙂

// Obydwie te zmienne wypisz w konsoli.

// Następnie za pomocą metody splice, wytnij dwa ostanie elementy z tablicy colors.

// Te nowe elementy wsadź do tablicy o nazwie randomStuff. Nowe tablice wyloguj w konsoli.

// Teraz przejdź do tablicy cars. Musisz wyciąć z niej wszystkie samochody i przypisać do tablicy newCars. Skorzystaj oczywiście z metody splice. Podczas wycinania, dodaj napis 'test' do tablicy cars.

// W konsoli wyloguj tablicę cars oraz newCars.

// const numbers = [0, 0, 1, 1, 2, 2, 2]
// const colors = ['red', 'green', 'blue', true, 123]
// const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

// const numbers2 = numbers.slice(0,2)
// console.log(numbers2)

// const numbers3 = numbers.slice(4,7)
// console.log(numbers3)

// const randomStuff = colors.splice(3,2)
// console.log(colors)
// console.log(ran domStuff)

// const newCars = cars.splice(2,4,'test')
// console.log(cars)
// console.log(newCars)

// const numbers = [0, 23, 48, 175, 2, 34,11]

// function number(x) {
//     return x % 2 === 0
// }
// console.log(numbers.filter(number));

// numbers.forEach(number => console.log(number * 5))

// console.log(numbers.includes(0))

// console.log(numbers.indexOf(333))

// zadania:

// const letters = ['c','d']
// letters.unshift('a','b')
// letters.push('e','f')
// console.log(letters)

// console.log(letters.includes('c'))

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// const foods = ['pizza','hot-dog', 'fries']

// const newFoods = numbers.concat(foods)
// console.log(newFoods)

// const mixDates = [...numbers, ...foods]
// console.log(mixDates)

// const numbers = [1, 5, 13, 26, 48]

// function multiply(x) {
//     return x * 5
// }

// const newNumbers = numbers.map(multiply)
// console.log(newNumbers)

// lub
// const newNumbers = numbers.map(number => number * 5)
// console.log(newNumbers)

// for (const number of numbers) {
//     if (number % 2 === 0) {
//         console.log(`Liczba parzysta: ${number}`);
//     } else {
//         console.log(`Liczba nieparzysta: ${number}`);
//     }
// }

// const color = ["pink"]
// color.push("red")
// color.unshift("green")
// console.log(color)

// for (let i = 0; i < color.length; i++) {
//     console.log(`Mój ulubiony kolor to: ${color[i].toUpperCase()}`)
// }

// for (let i = 0; i < color.length; i++) {
//     console.log(`Mój ulubiony kolor to: ${color[i].charAt(0).toUpperCase() + color[i].slice(1)}`)
// }

// const cars = "Audi, Mercedes, BMW, Nissan, Dodge"

// const newCars = cars.split(', ')
// console.log(newCars)

// if (newCars.length > 3) {
//     console.log('Jest OK')
// } else {
//     console.log('Nie jest OK')
// }
// newCars.length > 3 ?  console.log('Jest OK') : console.log('Nie jest OK')

// if (newCars.includes('Audi')) {
//     newCars.push('Porsche')
// } else {
//     newCars.pop()
// }
// console.log(newCars)

// function test() {
//     console.log('cześć')
// }
// test()

// const helloWorld = function () {
//     console.log('cześć! 123');
// }

// helloWorld()

// function add(parametr) {
//     console.log(`Podany argument to:  ` + parametr);
// }

// add('test')

// function add(x, y) {
//     console.log(x + y)
// }
// add(2,5)

// function newQuest (x, y) {
// console.log(`Cześć, mam na imię ${x} i mam ${y} lat.`)
// }
// newQuest('Agata', 18)

// const heading = document.querySelector('h1')

// heading.addEventListener('click', function() {
//     console.log('Kliknięto mnie');
// })

// const arrowFunction = () => {

// }

// function test(name) {
//     console.log(`Mam na imię ${name}`)
// }
// test('Lisa')

// const test2 = (name) => {
//       console.log(`Mam na imię ${name}`)
// }
// test2('Klaudia')

// const test3 = name => console.log(`Mam na imię ${name}`)
// test3('Magda')

// const test4 = (name,age) => console.log(name, age)
// test4('Tom', 15)

// const add2 = (num1,num2) => num1 * num2

// const days = ['poniedziałek', 'wtorek']

// const days2 = days.forEach(function(day) {
//     console.log(day);
// })

// const days3 = days.forEach((day) => console.log(day))

// const newItems = (x,y) => console.log(x + y)
// newItems(5,7)

// const milk = (name) => console.log(`Lubię sowoje imię ${name}`)
// milk('Mariola')

// const ending = (x,y,name) => {
//     console.log(x+y)
//     console.log(`Mam piękne imię: ${name}`)

// }
// ending(5,7,'Ala')

// const hello = (name = 'drogi użytkowniku') => {
// console.log(`Cześć ${name}, jak sie masz?`)
// }
// hello()
// hello('Agata')

// const numbers = [.5, 4, 'abc']
// const names = ['Lisa', 'Przemek', 'Majka']

// numbers.forEach(num => console.log(num * num))

// const bigNames = names.map(name => name.toUpperCase())
// console.log(bigNames);

// const showBigNames = (name) => {
//     console.log(name.toUpperCase());
// }
// names.forEach(showBigNames)

// names.forEach(el => console.log(el.toUpperCase()))

// const numbers = (x, y, ...z) => {
//     console.log(x, y, z)
//     console.log(z.map(el => el * 2));
// }

// numbers(12,32,231,54,213,53,543,543)

// let score

// const add = (x, y) => {
//   let score = x + y

//   const funkcja2 = numX => console.log(`Liczba ${score} jest nieparzysta`)

//   const funkcja1 = numX => console.log(`Liczba ${score} jest parzysta`)

//   if (score % 2 === 0) {
//     funkcja1(score)
//   } else {
//     funkcja2(score)
//   }
// }

// add(8, 5)

// ?????????????????????????????????????????
// const add = (x, y) => {
//   const score = x + y
//   score % 2 === 0 ? evenMsg(score) : oddMsg(score)
// }

// const evenMsg = (num) => {
//   console.log(`Liczba ${score} jest parzysta`)
// }

// const oddMsg = (num) => {
//   console.log(`Liczba ${score} jest nieparzysta`)
// }

// add(6, 6)

// let celsius
// let temp

// const fahrenheit = c => {
//   let celsius = c
//   let temp = celsius * 1.8 + 32

//   console.log(`${celsius}st.C = ${temp}st.F`)
// }
// fahrenheit(20)

// const num = 10
// const numbers = []

// for (i = 0; i < num; i++) {
//   numbers.push(i)
// }
// // console.log(numbers)
// const func = (x) => {
//  if (x % 3 === 0 && x !== 0) {
//     console.log(`${x} jest podzielne przez 3`)
//  } else {
//     console.log(`${x} jest nie podzielne przez 3 lub ${x} = 0`)
//  }
// }

// numbers.forEach(func)

// const test = document.getElementById('item')

// const test2 = document.getElementsByTagName('li')

// const test3 = document.getElementsByClassName('test')

// const test = document.querySelector('#item')
// const test2 = document.querySelector('li')

// const ulList = document.querySelector('ul')
// console.log(ulList);

// const liItem = ulList.querySelector('li')
// console.log(liItem);

// const liItems = document.querySelectorAll('li')

// const newLi = document.createElement('li')
// ulList.appendChild(newLi).textContent = 'abc'

// const heading = document.querySelector('h1')
// const table1 = document.querySelectorAll('p')

// const test = document.querySelector('.test')
// const test2 = test.querySelector('#test')
// console.log(heading)
// console.log(table1)
// console.log(test)
// console.log(test2)

// const ulList = document.createElement('ul')
// const liItem = document.createElement('li')
// liItem.textContent = 'cześć'

// document.body.appendChild(ulList)
// ulList.appendChild(liItem)

// const test = document.querySelector('div')
// const pItem = document.createElement('p')
// test.appendChild(pItem)

// const h1 = document.createElement('h1')
// const h2 = document.createElement('h2')
// const section = document.createElement('section')

// document.body.appendChild(section)
// // section.appendChild(h1)
// // h1.textContent = 'jestem h1'
// // section.appendChild(h2)

// section.append(h1, h2)

// const btn = document.querySelector('button')

// // btn.outerHTML = '123'
// // btn.innerHTML = 'abcd'
// //jeśli podamy sobie kod w html to on zostanie wyświetlony jako zwykły tekst
// btn.innerText = 'abcd'
// btn.textContent = 'abcd'

// div.removeChild(p123)
// document.body.removeChild(div)

// p123.remove()
// div.remove()

// const btn1 = document.querySelector('.btn-1')
// const btn2 = document.querySelector('.btn-2')
// const btn3 = document.querySelector('.btn-3')

// btn1.addEventListener('click', function () {
//     console.log('kliknięto mnie!');
// })

// btn2.addEventListener('mouseover', () => console.log('najechano na mnie'))

// const test = () => {
//     console.log('double click')
// }

// btn3.addEventListener('dblclick', test)

// const btns = document.querySelectorAll('button')
// console.log(btns);

// const smile = () => {
//     console.log(':)')
// }
// jeśli pobierzemy wszytskie przyciski to nie możemy nadać Listenera na wszystkie, (gdyż jest to obiekt tablicopodobny):

// Nadajemy na każdy jeden przycisk:

// btns.forEach(btn => btn.addEventListener('click', smile))

// const btn = document.querySelector('button')

// const test = (e) => {
//     console.log(e.target);
//     console.log(e.target.classList);
//     console.log(e.target.offsetTop);
// }

// btn.addEventListener('click', test)

// const infoGold = (e) => {
//     e.stopPropagation()
//     console.log('wykonuje jakieś zadanie')
// }

// infoGold.addEventListener('click', infoGold)

// const allCircles = document.querySelectorAll('circle')
// const gold = document.querySelector('.gold')
// const lime = document.querySelector('.lime')

// allCircles.forEach(circle => circle.addEventListener('click', () => console.log(circle)))

// const div = document.createElement('div')
// newCircle.classList.add('circle', 'purple')
// gold.appendChild(div)

// lime.addEventListener('click', e => {
//     if (e.target.matches('.circle2')){
//         console.log(e.target)
//     }
// })

// lime.addEventListener('click', e => {
//     if (e.target.classList.contains('.circle2')){
//         console.log(e.target)
//     }
// })

// const div = document.querySelector('div')

// div.style.fontSize = '48px'
// div.style.backgroundColor = 'tomato'
// div.style.padding = '20px 40px'
// div.style.borderRadius = '8px'

// div.classList.add('test')

// const addBtn = document.querySelector('.add')
// const removeBtn = document.querySelector('.remove')
// const toggleBtn = document.querySelector('.toggle')
// const text = document.querySelector('p')

// const addClass = () => {
//     text.classList.add('test')
// }

// const removeClass = () => {
//     text.classList.remove('test')
// }

// const toggleClass = () => {
//     text.classList.toggle('test')
// }

// addBtn.addEventListener('click', addClass)
// removeBtn.addEventListener('click', removeClass)
// toggleBtn.addEventListener('click', toggleClass)

// const ulList = document.createElement("ul")

// document.body.appendChild(ulList)

// const number = 11

//   for (let i = 1; i < number; i++) {
//     const liItem = document.createElement('li')
//     liItem.textContent = i
//     ulList.append(liItem)
//   }

//   const lastLi = ulList.querySelector('li:last-child')

// lastLi.textContent = 'Jestem ostatnim elementem.'
// lastLi.style.backgroundColor = 'blue'
// lastLi.style.padding = '20px 40px'
// lastLi.style.fontSize = '48px'

// const ulList = document.createElement("ul")
// document.body.appendChild(ulList)
// const num = 11

// for (i = 1; i < num; i++) {
//   const liItem = document.createElement("li")
//   liItem.textContent = i
//   ulList.appendChild(liItem)
// }

// const lastLi = ulList.querySelector('li:last-child')
// lastLi.textContent = 'jestem ostatnim elementem'
// lastLi.style.backgroundColor = 'blue'
// lastLi.style.padding = '10px 20px'
// lastLi.style.fontSize = '48px'

// const p1 = document.querySelector('.p1')
// const p2 = document.querySelector('.p2')
// const btn1 = document.querySelector('.btn1')
// const btn2 = document.querySelector('.btn2')
// const square = document.querySelector('.square')

// const red = () => {
//   square.style.backgroundColor = 'red'
// }
// const blue = () => square.style.backgroundColor = 'blue'

// const showElement = () => {
//   p1.classList.toggle('show')
//   p2.classList.toggle('show')

//   // if (p1.classList.contains('show')) {
//   //   p1.classList.remove('show')
//   //   p2.classList.add('show')
//   // } else {
//   //   p1.classList.add('show')
//   //   p2.classList.remove('show')
//   // }
// }

// btn1.addEventListener('dblclick', function () {
//   console.log('cześć')
// })
// btn2.addEventListener('click', showElement)
// square.addEventListener('mouseover', red)
// square.addEventListener('mouseleave', blue)

// const test = () => console.log('abc')
// setTimeout(test, 500)
// setInterval(test, 500)

// alert('cześć')

// if (confirm('chcesz pizze?')) {
//     console.log('ok');
// } else {
//     console.log('nie to nie');
// }

// const name = prompt('Cześć, jak masz na imie?', 'Ania')
// console.log(`Cześć ${name}`)

// console.log(Math.PI);

// console.log = Math.random() * 10

// console.log(Math.floor(number))

// link.setAttribute('href', '#')
// link.setAttribute('target', '_blank')

// console.log(img.getAttribute('src'));

// console.log(p.hasAttribute('style'));

// p.removeAttribute('style')

// const p = document.querySelector('p')

// p.setAttribute('target', '_blank')
// p.removeAttribute('class')
// const div = document.querySelector('div')
// const divTag = document.querySelector('[data-number="12"]')

// console.log(divTag.dataset)
// console.log(divTag.moreInfo)

// //dodawanie atrybutu
// divTag.setAttribute('data-test', '123')

// // lub stworzyliśmy data-atrybut o nazwie data-color z wartościa blue
// divTag.dataset.color = 'blue'

// const prevSibling = middlechild.previosElementSibling
// const nextSibling = middlechild.nextElementSibling
// const parentEl = middlechild.parentElement

// console.log(middlechild.closest('.class-name'))

// const img = document.querySelector('img')

// img.setAttribute('src', 'https://waskiel.pl/wp-content/uploads/2019/11/pomysl-na-zdjecie-wyobraznia-i-rzemioslo.jpg.webp')

// img.setAttribute('alt', 'jezioro o zachodzie słońca z dwoma ptakami')

// const abc = () => {
//     console.log('hello')
// }

// setTimeout(abc, 2000)

// const liItems = document.querySelectorAll('li')
// let number = 1

// for (const liItem of liItems) {
//     liItem.textContent = number
//     liItem.dataset.id = number
//     number++
// }

// // for (let i = 0; i <= liItems.length; i++){
// //     liItems[i].textContent = number;
// //     liItems[i].dataset.id = number;
// //     number++
// // }

// const liThree = document.querySelector('[data-id="3"]')
// console.log(liThree)
// console.log(liThree.closest('.wrapper'))

// const people = [
//     {
//         name: 'Agata',
//         age: 32
//     },
//     {
//         name: 'Kuba',
//         age: 30
//     }
// ]

// console.table(people)

// const myObject = {
//     key: value,
//     key: value,
//     key: value
// }

// const newUser = {
//     name: 'Lisa',
//     age: 23,
//     car: {
//         brand: 'Audi',
//         model: 'A3',
//         color: 'czarny'
//     }
// }

// console.log(newUser.name);
// console.log(newUser.age);
// console.log(newUser.car.brand);

// const newUser = {
//     name: 'Agata',
//     age: 18,
//     car: {
//         brand: 'opel',
//         model: 'astra',
//         color: 'niebieski',
//         'fav-food': 'pizza',
//         sound() {
//             console.log('brum brum')
//         }
//     }
// }

// console.log(`${newUser.name} jeździ samochodem marki ${newUser.car.brand}`);
// newUser.car.sound()

// newUser.country = 'Polska'
// newUser['fav-color'] = 'niebieski'

// console.log(newUser)

// const dogName = 'Drops'
// const dogAge = 5

// const dog = {
//     dogName,
//     dogAge
// }

// const user = {
//     name: 'Agata',
//     age: 23,
//     sex: 'female',
//     'hair-color': 'blonde'
// }

// for(const data in user) {
//     console.log(data + ':' + user[data]);

// }

// const user = {
//     name: 'Agata',
//     showName() {
//         console.log(this.name)
//     }
// }

// user.showName()

//konstruktor
// function User(name1, age2) {
//     this.name = name1
//     this.age = age2
// }

// //tworzymy objekt:
// const newUser = new User('Klaudia', 24)
// const newUser2 = new User ('Lily', 33)
// const newUser3 = new User ('Majek', 45)

// console.log(newUser, newUser2, newUser3);

// User.prototype.hello = function () {
//     console.log(`Cześć ${this.name}`)
// }
// User.prototype.country = 'Polska'
// console.log(newUser2.country);

// newUser.hello()

// const btn1 = document.querySelector('.btn-1')
// const btn2 = document.querySelector('.btn-2')
// const btn3 = document.querySelector('.btn-3')
// const p = document.querySelector('p')

// function Meal (name,price) {
//     this.name = name
//     this.price = price
// }

// const newMeal1 = new Meal('Frytki','15zł')
// const newMeal2 = new Meal('Pizza','35zł')
// const newMeal3 = new Meal('Hamburger','30zł')

// Meal.prototype.info = function () {
//     console.log(`${this.name} kosztuje ${this.price}.`)
// }

// btn1.addEventListener('click', () => newMeal1.info())
// btn2.addEventListener('click', () => newMeal2.info())
// btn3.addEventListener('click', () => newMeal3.info())

// const person = {
//     name: 'Lisa',
//     'fav-meal': 'schabowy',
//     address: {
//         city: 'Kraków',
//         'zip-code': '30-000',
//         showCity: function() {
//             console.log(this);
//         }
//     }
// }

// person.address.showCity()

// function Food(name) {
//     this.name = name
// }

// const meal = new Food('schabowy')
// const meal2 = new Food('pepsi')

// console.log(meal, meal2)

// const btns = document.querySelectorAll('button')

// btns.forEach(btn => btn.addEventListener('click', function(){
//     console.log(this.textcontent)
// }))

// const ob = {
//     number: 123,
//     showNumber() {
//         console.log(this.number);
//     },
//     showNumber2() {
//         const test = () => {
//             console.log(this.number);
//             console.log(this)
//         }
//         test()
//     }
// }

// ob.showNumber()
// ob.showNumber2()

// function test() {
//     console.log(this)
//     console.log(this.name)
// }

// const car1 = {
//     name: 'Audi',
// }

// const car2 = {
//     name: 'Dodge',
// }

// const car3 = {
//     name: 'Nissan',
// }

// test.bind(car1)()

// const movie = {
//     title: 'Avengers',
// }

// function showMovie(price, cinema) {
//     console.log(`Film ${this.title}, cena: ${price}, kino: ${cinema}`)
// }
// // (this w tym wypadku wskazuje na window)

// //funkcja.call(obiekt, argumenty)
// showMovie.call(movie, 35, 'Kino Kijów')

// //funkcja apply(obiekt, tablica)
// showMovie.apply(movie, [35, 'Kino Kijów'])

// class Person2 {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     sayHi() {
//         console.log(`Cześć, jestem ${this.name}!`)
//     }

//     showAge() {
//         console.log(`Mam ${this.age} lata.`)
//     }
// }

// const person = new Person2('Ania', 33)
// person.sayHi()
// person.showAge()

// function Food(name, price) {
//     this.name = name
//     this.price = price
// }

// Food.prototype.showPrice = function() {
//     console.log(`Cena za ${this.name} wynosi: ${this.price} zł.`)
// }

// const meal = new Food('frytki', 10)
// meal.showPrice()

// class Food2 {
//     constructor(name, price) {
//         this.name = name
//         this.price = price
//     }

//     showPrice() {
//         console.log(`Cena za ${this.name} wynosi: ${this.price} zł.`)
//     }
// }

// const meal2 = new Food2('pizza', 35)
// console.log(meal2)

// class Animal {
//     constructor(name) {
//         this.name = name
//     }

//     sound() {
//         console.log(`Zwierzak robi "hau hau"`)
//     }
// }

// class Dog extends Animal {
//     constructor(name, age) {
//         super(name)
//         this.age = age
//     }
// }

// class Cat extends Animal {
//     sound() {
//         console.log(`Zwierzak robi "miau miau"`)
//     }
// }

// const dog = new Dog('Drops', 6)
// const cat = new Cat('kot')
// cat.sound()
// dog.sound()
// console.log(cat)

// const user = {
//     name: 'Lily',
//     age: 23
// }

// const pet = {
//     name: 'Drops',
//     type: 'dog'
// }

// const userInfo = Object.assign({}, user, pet)
// console.log(userInfo)

// const userCopy = Object.assign({}, user)
// userCopy.age = 25
// console.log(userCopy)

// const person = {
//     name: 'Lily',
//     age: 23,
//     job: 'DJ',
//     car: {
//         brand: 'Dodge',
//         model: 'Viper'
//     }
// }

// const showInfo = ({job, name, age}) => {
//     console.log(`${name} pracuje jako ${job} i ma ${age} lata.`)
// }

// showInfo(person)

// const showInfo2 = ({car: {brand, model}}) => {
//     console.log(`Jej samochód to ${brand} ${model}`);
// }

// showInfo2(person)

// const showInfo3 = () => {
//     const {car: {brand, model}} = person
//     console.log(`Jej samochód to ${brand} ${model}`);
// }

// showInfo3()

// const colors = ['red', 'green', 'blue']

// const firstColor = colors[0]
// const secondColor = colors[1]

// const [first, second] = colors

// console.log(firstColor, secondColor)
// console.log(first, second)

// const btn = document.querySelector('button')
// const img = document.querySelector('img')

// const URL = 'https://dog.ceo/api/breeds/image/random'

// fetch(URL)
// .then(res => res.json())
// .then(data => console.log(data.message))
// .catch(err => console.error(err))

// btn.addEventListener('click', ()=> {
//     fetch(URL)
//     .then(res => res.json())
//     .then(data => img.setAttribute('src', data.message))
//     .catch(err => console.error(err))

// })

// const btn = document.querySelector('button')
// const img = document.querySelector('img')

// const URL = 'https://dog.ceo/api/breeds/image/random'

// btn.addEventListener('click', ()=> {
//     fetch(URL)
//     .then(res => res.json())
//     .then(data => img.setAttribute('src', data.message))
//     .catch(err => console.error(err))
// })'

// const test = new Promise((resolve, reject) => {
//     if(true) {
//         resolve('jest ok')
//     } else {
//         reject('błąd')
//     }
// })

// test
// .then(info => console.log(info))
// .catch(err => console.error(err))

// const url = 'ala.com'

// const test = {
//     method: 'POST',
// }

// fetch(url, test)

// const checkAge = age => {
//   return new Promise((resolve, reject) => {
//     if (age >= 18) {
//       resolve()
//     } else {
//       reject("Masz za mało lat")
//     }
//   })
// }

// const doubleCheck = () => {
//   return new Promise(resolve => {
//     console.log("Sprawdzam jeszcze raz...")
//     setTimeout(() => {
//       resolve("Faktycznie, wiek się zgadza")
//     }, 1000)
//   })
// }

// // checkAge(50)
// //   .then(() => {
// //     console.log("Chyba możesz wejść")
// //     return doubleCheck()
// //   })
// //   .then(res => console.log(res))
// //   .then(() => {
// //     console.log("Weryfikacja zakończona!")
// //   })
// //   .catch(error => console.error(error))

// async function test() {
//   try {
//     await checkAge(8)
//     console.log("Chyba możesz wejść.")
//     await doubleCheck()
//     console.log("Faktycznie, wiek się zgadza")
//     console.log("Weryfikacja zakończona")
//   } catch {
//     console.error("Błąd masz za mało lat")
//   }
// }
// test()

// const URL = 'https://dog.ceo/api/breeds/image/random'

// fetch(URL)
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.error(err))

// async function test() {
//     try {
//         const res = await fetch(URL)
//         const data = await res.json()
//         console.log(data)
//     } catch {
//         console.error('błąd')
//     }
// }
// test()

// const URL = 'https://dog.ceo/api/breeds/image/random'

// axios.get(URL).then(res => {
//     div.setAttribute('src', res.data.message)
// })

// async function showImage() {
//     const response = await axios.get(URL)
//     div.setAttribute('src',response.data.message)
// }
// showImage()