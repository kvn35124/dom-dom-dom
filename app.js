


let button = document.createElement('button');
let buttonText = document.createTextNode('Add Sqaure');
button.appendChild(buttonText);
document.body.appendChild(button);
let container = document.createElement('div');
document.body.appendChild(container);
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
let idCounter = 0;

button.addEventListener('click', function() {
    let box = document.createElement('div');
    container.appendChild(box);
    box.id = idCounter;
    idCounter ++;
    box.addEventListener('click', function() {
        console.log(box.id);
    })
    box.style.backgroundColor = 'black';
    box.style.height = '5em';
    box.style.width = '5em';
    box.style.margin = '1em';
    box.addEventListener('click', function() {
        let colorArray = ['aqua', 'beige', 'blue', 'chocolate', 'dark gray', 'dark red', 'gold', 'lime'];
        let randomColorGenerator = Math.floor(Math.random() * colorArray.length);
        box.style.backgroundColor = colorArray[randomColorGenerator];
    })
    box.addEventListener('mouseover', function() {
        let boxText = document.createTextNode(idCounter);
        box.appendChild(boxText);
        box.addEventListener('mouseout', function() {
        box.removeChild(boxText);
        })
    })
    box.addEventListener('dblclick', function() {
        if (id % 2 == 0)
           box.removeChild();
        else 
            box.removeChild()
    })
})


