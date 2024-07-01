const containerDiv = document.querySelector('#container-div');
const column = document.createElement('div');
column.setAttribute('id','column');

document.addEventListener('DOMContentLoaded',() => {
    createGrid()
});

function createGrid(size=16){
    for(let i = 0; i < size; i++){
        const row = document.createElement('div');
        row.setAttribute('id','row'+i);
        row.classList.add('row');

        //console.log(`i ${i}`)
        for(let j = 0; j < size; j++){
            //console.log(`j ${j}`);
            const innerRow = document.createElement('div');
            innerRow.setAttribute('id','row-inner'+ j + '-' + i);
            row.appendChild(innerRow);
            innerRow.classList.add('inner');
        }
        
        column.appendChild(row);
        containerDiv.appendChild(column);
    }
}
//document.querySelector('#inner-row').setAttribute('style','border: 3px solid black;')

document.body.appendChild(containerDiv);

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
