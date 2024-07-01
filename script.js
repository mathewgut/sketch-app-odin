const containerDiv = document.querySelector('#container-div');
const column = document.createElement('div');
column.setAttribute('id','column');
const pixelsPerSquare = document.createElement('div');


document.addEventListener('DOMContentLoaded',() => {
    document.body.appendChild(containerDiv);
    createGrid();
});



function gridElementSize (inputDimension){
    totalSize = 500; // update to fetch current div height or width
    const unitSize = totalSize/inputDimension;
    pixelsPerSquare.textContent = `${unitSize}px per square`;
    containerDiv.appendChild(pixelsPerSquare);
    return unitSize
}

function createGrid(size=16){
    const unitSize = gridElementSize(size)
    for(let i = 0; i < size; i++){
        const row = document.createElement('div');
        row.setAttribute('id','row'+i);
        row.classList.add('row');

        //console.log(`i ${i}`)
        for(let j = 0; j < size; j++){
            //console.log(`j ${j}`);
            const innerRow = document.createElement('div');
            innerRow.setAttribute('id','row-inner'+ j + '-' + i);
            innerRow.style.height = `${unitSize}px`;
            innerRow.style.width = `${unitSize}px`;
            row.appendChild(innerRow);
            innerRow.classList.add('inner');
        }
        
        column.appendChild(row);
        containerDiv.appendChild(column);
    }
}



column.addEventListener('mouseover', (e) => {
    let target = e.target;
    console.log(target.id);
    const activeObject = document.querySelector(`#${e.target.id}`)
    if(target.id.includes('row-inner')){
        activeObject.classList.add('active');
    }

})


function getUserInput(){
    let userInput = prompt('Enter a grid size. (e.g 20 would mean 20x20)')
    userInput = Number(userInput);
    return userInput;
}

function nukeGrid(){
    while (column.firstChild) {
        console.log(column.firstChild)
        column.removeChild(column.firstChild);
    }
}    

function createUserGrid(){
    let gridSize = getUserInput();
    nukeGrid();
    createGrid(gridSize);
}
    

const gridButton = document.querySelector('#alter-grid');

gridButton.addEventListener('click', (e) => {
    createUserGrid();
})
