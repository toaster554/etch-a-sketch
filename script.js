function colorCell(cell, color) {
    console.log(cell);
    cell.style.backgroundColor = color;
}

function createCanvas(size) {
    let canvas = document.createElement('div');
    canvas.classList.add('canvas');
    canvas.setAttribute('style', `display: grid; grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr)`);

    for (let i = 0; i < size**2; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', (e) => colorCell(e.target, 'black'));
        canvas.appendChild(cell);
    }

    let canvasContainer = document.querySelector('#canvas-container');
    canvasContainer.appendChild(canvas);
}

createCanvas(8);