const containerDiv = document.querySelector('#container-div');
const column = document.createElement('div');
column.setAttribute('id','column');
const pixelsPerSquare = document.createElement('div');
let currentGridSize = 0;
const colors = ['black','red','green','blue','purple']


document.addEventListener('DOMContentLoaded',() => {
    document.body.appendChild(containerDiv);
    createGrid();
    fillSquareColor()
});



function gridElementSize (inputDimension){
    totalSize = 500; // update to fetch current div height or width
    const unitSize = totalSize/inputDimension;
    pixelsPerSquare.textContent = `${unitSize}px per square`;
    containerDiv.appendChild(pixelsPerSquare);
    return unitSize
}

function createGrid(size=16){
    currentGridSize = size;
    const unitSize = gridElementSize(size)
    for(let i = 0; i < size; i++){
        const row = document.createElement('div');
        row.setAttribute('id','row'+i);
        row.classList.add('row');

        for(let j = 0; j < size; j++){
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

// changes current text of color button so it can be accessed by fillSquareColor()
function rotateColorOptions(){
    if (colors.includes(changeColorButton.textContent)){
        let nextPosition = 0;
        let currentPosition = colors.indexOf(changeColorButton.textContent);
        if(currentPosition === colors.length -1){
            nextPosition = 0;
            console.log(colors[nextPosition]);
            return colors[nextPosition];
        }
        nextPosition = currentPosition += 1;
        
        console.log(currentPosition+'curr');
        console.log(colors[nextPosition]);
        return colors[nextPosition];
    }
    console.log('invalid color option')
}

// uses eventlistener on container to improve performance
function fillSquareColor(color='black-fill'){
    column.addEventListener('mouseover', (e) => {
        let target = e.target;
        console.log(target.id);
        const activeObject = document.querySelector(`#${e.target.id}`);
        for(item in colors){
            console.log(item)
            if (activeObject.classList.contains(colors[item]+'-fill')){
                activeObject.classList.remove(colors[item]+'-fill');
                console.log('class item:' + colors[item] +'-fill');
            }
        }
        if(target.id.includes('row-inner')){
            activeObject.classList.add(color);
        }
    })
}


function getUserInput(){
    let userInput = prompt('Enter a grid size. (e.g 20 would mean 20x20)')
    userInput = Number(userInput);
    return userInput;
}

function nukeGrid(){
    while (column.firstChild) {
        console.log(column.firstChild);
        column.removeChild(column.firstChild);
    }
}    

function createUserGrid(){
    let userGridSize = getUserInput();
    nukeGrid();
    createGrid(userGridSize);
    currentGridSize = userGridSize;
}


// container for buttons
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('.button-container');

// creating buttons
const gridButton = document.createElement('button');
gridButton.setAttribute('id','alter-grid');
gridButton.classList.add('grid-button');
gridButton.textContent = 'Resize grid';

const resetGridButton = document.createElement('button')
resetGridButton.setAttribute('id','grid-reset');
resetGridButton.textContent = 'Reset grid';
resetGridButton.classList.add('grid-button');

const changeColorButton = document.createElement('button');
changeColorButton.classList.add('grid-button');
changeColorButton.textContent = 'black';

buttonContainer.appendChild(gridButton);
buttonContainer.appendChild(resetGridButton);
buttonContainer.appendChild(changeColorButton)

document.body.insertBefore(buttonContainer, containerDiv);

gridButton.addEventListener('click', (e) => {
    createUserGrid();
})

resetGridButton.addEventListener('click', () => {
    nukeGrid();
    createGrid(currentGridSize);
})

changeColorButton.addEventListener('click', (e) => {
    let currentColor = rotateColorOptions();
    changeColorButton.textContent = currentColor;
    fillSquareColor(currentColor+'-fill');
})
