


let button = document.createElement('button');
let buttonText = document.createTextNode('Add Sqaure');
button.appendChild(buttonText);
document.body.appendChild(button);
let container = document.createElement('div');
document.body.appendChild(container);
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
let idCounter = 0;


button.addEventListener('click', function () {
    let box = document.createElement('div');
    let boxText = document.createTextNode(idCounter);
    container.appendChild(box);
    box.id = idCounter;
    idCounter++;
    box.style.backgroundColor = 'black';
    box.style.height = '5em';
    box.style.width = '5em';
    box.style.margin = '1em';

    box.addEventListener('click', function () {
        console.log(box.id);
    })
    box.style.backgroundColor = 'black';
    box.style.height = '5em';
    box.style.width = '5em';
    box.style.margin = '1em';

    box.addEventListener('click', function () {
        let colorArray = ['aqua', 'beige', 'blue', 'chocolate', 'dark gray', 'dark red', 'gold', 'lime'];
        let randomColorGenerator = Math.floor(Math.random() * colorArray.length);
        box.style.backgroundColor = colorArray[randomColorGenerator];
    })
    box.addEventListener('mouseover', function () {
        box.appendChild(boxText);
        box.style.textAlign = 'center';
    })
    box.addEventListener('mouseout', function () {
        box.removeChild(boxText);
    })
    

    box.addEventListener('dblclick', function() {
        if(box.id % 2 === 0) {
            //even
            if(box.previousSibling === null) {
                window.alert("NO WAY!!!")
            } else {
                box.parentNode.removeChild(box.previousSibling);
            }
        } else {
            //odd
            if(box.nextSibling === null) {
                window.alert("NO WAY!!!")
            } else {
                box.parentNode.removeChild(box.nextSibling);
            }
        }
    })

})


