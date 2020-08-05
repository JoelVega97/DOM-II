// Your code goes here
// * `mouseover`
// * `keydown`
// * `wheel`
// * `load`
// * `focus`
// * `resize`
// * `scroll`
// * `select`
// * `dblclick`
// * `drag / drop`

//VARIABLES

//NAV

let html = document.querySelector('html')
let allLinks = document.querySelectorAll('a')

let topTitle = document.querySelector('h1')

let welcome = document.querySelector('h2')

let letsGo = document.querySelector('.text-content')
let letsGoTitle = letsGo.querySelector('h2')

let destination = document.querySelector('.destination')
let destinationBtn = destination.querySelector('.btn')

let advAwaits = document.querySelector('.text-content:nth-of-type(2)')
let advAwaitsTitle = advAwaits.querySelector('h2')

let pick = document.querySelector('.content-destination')
let pickTitle = pick.querySelector('h2')

let islandGetaway = document.querySelector('.destination:nth-of-type(3)')
let islandGetawayTitle = islandGetaway.querySelector('h4')

//FUNCTIONS

allLinks.forEach(el => {
    el.addEventListener('mouseover', function (event){
        event.target.style.color = 'blue';
        setTimeout(function() {
        event.target.style.color = "";
    }, 500);
  }, false);
})

topTitle.addEventListener('dblclick', function(event){
    if(topTitle.style.color === ''){
        topTitle.style.color = "red"
    }
    else if(topTitle.style.color === 'red'){
        topTitle.style.color = ''
    }
})

function typo(event){
    if(event.target.textContent === 'Welcome To Fun Bus!'){
        event.target.textContent = 'Welcome To Bun Fus!'
    }
    else if(event.target.textContent ==='Welcome To Bun Fus!'){
        event.target.textContent = 'Welcome To Fun Bus!'
    }
}

welcome.addEventListener('click', typo)

letsGoTitle.addEventListener('copy', function(event){
    letsGoTitle.textContent = 'HEY DO NOT DO THAT'
    letsGoTitle.style.background = 'Black'
    letsGoTitle.style.color = 'Red'
})


html.addEventListener('paste', function(event){
    html.style.color = 'red'
    html.textContent = 'WEE WOO YOU BROKE COPYRIGHT LAWS'
})


destinationBtn.addEventListener('mouseleave',function(event){
    destinationBtn.textContent = 'No Come Back!';
    setTimeout(function() {
       destinationBtn.textContent = 'Sign Me Up!';
    }, 650);
  }, false);

html.addEventListener('keydown', function(event){
    advAwaitsTitle.textContent = 'You cannot type here.'
})

html.addEventListener('keyup', function(event){
    advAwaitsTitle.textContent = 'Adventure Awaits'
})

pickTitle.addEventListener('cut', function(event){
    pickTitle.textContent = "Listen cutting is the same as copying "
})

islandGetawayTitle.addEventListener('contextmenu', function(event){
    islandGetawayTitle.textContent = 'Nothing behind here'
    event.preventDefault()
    setTimeout(() => {
        islandGetawayTitle.textContent = 'Island Getaway'
    }, 1000);
})