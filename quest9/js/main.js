const arrowIcon = document.querySelector('fas')
const item1 = document.querySelector('.item1')
const btn = document.querySelector('.arrow')

function showImage() {
    item1.classList.toggle("show")

    if (item1.classList.contains('show')) {
    console.log('ok')
}   else {
    console.log('nie ok')
}
}

btn.addEventListener('click', showImage)