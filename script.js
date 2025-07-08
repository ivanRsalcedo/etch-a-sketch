const grid = document.querySelector('#grid');
let gridSize = 480;
let gridDimensions = 16;

for (let i = 0; i < gridDimensions * gridDimensions; i++) {
    createCell();
}
    
function createCell () {
    const cell = document.createElement('div');
    cell.style.width = `${calcCellSize()}px`;
    cell.style.height = `${calcCellSize()}px`;
    cell.addEventListener('mouseenter', () => {
        cell.style.backgroundColor = '#666';
    });
    cell.classList.add('cell');
    grid.append(cell);
}

function calcCellSize() {
    return gridSize / gridDimensions;
}