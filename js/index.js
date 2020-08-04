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

let allLinks = document.querySelectorAll('a')

let topTitle = document.querySelector('h1')

let welcome = document.querySelector('h2')

let letsGo = document.querySelector('.text-content')
let letsGoTitle = letsGo.querySelector('h2')






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

letsGo.addEventListener('keydown', function(event){
    letsGo.className = 'off'
})

