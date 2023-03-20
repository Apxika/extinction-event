let features = document.querySelector('ol')

features.addEventListener('click', function(event){
    let cursor = event.target;
    cursor.style.textDecoration = "line-through"
    console.log(features)
})

let features2 = document.querySelector('ul')

features2.addEventListener('click', function(event){
    let cursor2 = event.target;
    cursor2.style.opacity = 0
})

let dinoPics = document.querySelector("#row")

dinoPics.addEventListener('click', function(event){
    let dino = event.target
    dino.style.width = 0;
})

let meteorMe = document.querySelector('#destroy-all')
let featuresAll = document.querySelectorAll('ol li')
let features2All = document.querySelectorAll('ul li')
let dinoPicsAll = document.querySelectorAll('#row img')

function massExtinction(x, y, z){
    for (let i = 0; i < x.length; i++) {
    x[i].style.textDecoration = "line-through"
    }
    for (let i = 0; i < y.length; i++) {
    y[i].style.opacity = 0
    }
    for (let i = 0; i < z.length; i++) {
    z[i].style.width = 0
    }
}

meteorMe.addEventListener('click', function(){
    massExtinction(featuresAll, features2All, dinoPicsAll)
})