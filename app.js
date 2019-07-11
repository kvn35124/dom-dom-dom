


let button = document.createElement('button');
let buttonText = document.createTextNode('Add Sqaure');
button.appendChild(buttonText);
document.body.appendChild(button);

button.addEventListener('click', function() {
    let box = document.createElement('div');
    document.body.appendChild(box);
    box.className = 'box';
    box.style.backgroundColor = 'black';
    box.style.border = '1px';
    box.style.height = '5em';
    box.style.width = '5em';
    box.style.margin = '1em';
    box.idName = '1';
    box.addEventListener('click', function() {
        let colorArray = ['aqua', 'beige', 'blue', 'chocolate', 'dark gray', 'dark red', 'gold', 'lime'];
        let randomColorGenerator = Math.floor(Math.random() * colorArray.length);
        box.style.backgroundColor = colorArray[randomColorGenerator];
    })
})


