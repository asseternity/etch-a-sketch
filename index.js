let container = document.querySelector('#container');
let value = 1;
let squares;

let addSquares = document.createElement('button');
addSquares.textContent = 'Add squares';
addSquares.setAttribute('style','height:100%;width:100%;background-color:aqua');
container.appendChild(addSquares);
addSquares.addEventListener('click', () => {
    let times = prompt('How many times squares do you want created?', '64');
    if (times < 800) {
        createSquareMultiplier(times);
        let columns = Math.round(Math.sqrt(times));
        container.removeChild(addSquares);
        container.setAttribute('style',`min-height:100%;display:grid;grid-template-columns:repeat(${columns}, auto);grid-template-rows:auto;`);
    } else { alert('Please try again. Input a number below 800.') }
})

function createSquare(number) {
    let square = document.createElement('div');
    square.setAttribute('id', number);
    square.setAttribute('class', 'squares');
    container.appendChild(square);
    value++;
    squares = document.querySelectorAll('.squares');
    Array.from(squares).forEach(function(square) {
        square.addEventListener('mouseover', () => { square.setAttribute('style',`background-color:rgb(${rand()}, ${rand()}, ${rand()})`) })
        square.addEventListener('mouseout', () => { square.setAttribute('style', 'background-color:white') })
    })    
}

function rand() {
    let random = Math.floor(Math.random() * 255) + 1;
    return random;
}

function createSquareMultiplier(times) {
    for (i = 0; i < times; i++) {
        createSquare(value);
    }
}



