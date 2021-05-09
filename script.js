let curColor = 'black';

function colorCell() {
    if (curColor === 'rainbow') {
        this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    } else {
        this.style.backgroundColor = curColor;
    }
}

function createCanvas(size) {
    let canvas = document.createElement('div');
    canvas.classList.add('canvas');
    canvas.setAttribute('style', `display: grid; grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr)`);

    for (let i = 0; i < size**2; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', colorCell);
        canvas.appendChild(cell);
    }

    let canvasContainer = document.querySelector('#canvas-container');
    canvasContainer.appendChild(canvas);
}

function resetCanvas() {
    let cells = document.querySelectorAll('.canvas > .cell');
    cells.forEach(cell => cell.style.backgroundColor = '');
}

function resizeCanvas() {
    let newSize = parseInt(document.querySelector('#canvas-size').value);
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert('Please enter a valid size! (from 1 to 100)');
        return;
    }

    // remove current canvas;
    let canvasContainer = document.querySelector('#canvas-container');
    let canvas = document.querySelector('.canvas');
    canvasContainer.removeChild(canvas);

    createCanvas(newSize);
}

createCanvas(16);
let resetBtn = document.querySelector('#reset-canvas');
resetBtn.addEventListener('click', resetCanvas);

let resizeBtn = document.querySelector('#resize-canvas');
resizeBtn.addEventListener('click', resizeCanvas);

let colorScheme = document.querySelector('#color-scheme');
colorScheme.addEventListener('change', (e) => curColor = e.target.value);