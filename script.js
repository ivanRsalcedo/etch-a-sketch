let gridSize = 480;
let gridDimensions = 16;

const grid = document.querySelector('#grid');
const btnSize = document.querySelector('#btn-size');

btnSize.addEventListener('click', () => {
    let input = prompt('Enter the number of squares per side:\n (min: 2) (max: 100)', 16);
    if (input >= 2 && input <= 100 && !isNaN(input)){
        gridDimensions = input;
        generateGrid();
    }
    else
        alert('Invalid entry');
});

generateGrid();

function generateGrid() {
    grid.innerHTML = '';
    for (let i = 0; i < gridDimensions * gridDimensions; i++) {
        const cell = document.createElement('div');
        cell.style.width = `${calcCellSize()}px`;
        cell.style.height = `${calcCellSize()}px`;
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = '#666';
        });
        cell.classList.add('cell');
        grid.append(cell);
    }
}

function calcCellSize() {
    return gridSize / gridDimensions;
}