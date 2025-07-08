let gridSize = 480;
let gridDimensions = 16;

const grid = document.querySelector('#grid');
const btnSize = document.querySelector('#btn-size');

btnSize.addEventListener('click', () => {
    gridDimensions = prompt('Number of squares per side:', 16);
    clearGrid();
    generateGrid();
});

generateGrid();

function clearGrid(){
    grid.innerHTML = '';
}

function generateGrid() {
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