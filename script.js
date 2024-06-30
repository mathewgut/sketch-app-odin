const containerDiv = document.querySelector('#container-div');
const column = document.createElement('div');
column.setAttribute('id','column');


for(let i = 0; i < 16; i++){
    const row = document.createElement('div');
    row.setAttribute('id','row'+i);
    row.classList.add('row');

    console.log(`i ${i}`)
    for(let j = 0; j < 16; j++){
        console.log(`j ${j}`);
        const innerRow = document.createElement('div');
        innerRow.setAttribute('id','row-inner'+j);
        row.appendChild(innerRow);
        innerRow.classList.add('inner');
    }
    
    column.appendChild(row);
    containerDiv.appendChild(column);
}

//document.querySelector('#inner-row').setAttribute('style','border: 3px solid black;')

document.body.appendChild(containerDiv);