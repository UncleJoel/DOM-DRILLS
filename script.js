document.addEventListener('DOMContentLoaded' , function() {

//In the scripts.js file, using DOM manipulation, create a div with a class named "header-container".
let div = document.createElement('div');
div.className = 'header-container';
document.body.appendChild(div);

//Create a h1 element, then create a text node with the text "This is an h1". 
// Append the text to the h1 then append the h1 to the div, then append the div to the body. 
let h1 =document.createElement('h1');
h1.className = 'h1';
let h1text =document.createTextNode('This is an h1');
h1.appendChild(h1text);
div.appendChild(h1)

//Create a h2 element, give it the text "This is an h2" and append it to the same div the h1 one is.
//Repeat the following task for h3's through h6's.
//Give each heading element a class name 
//Go to styles.css and style each different heading element with a different color. 
let h2 =document.createElement('h2');
h2.className = 'h2';
let h2text =document.createTextNode('This is an h2');
h2.appendChild(h2text);
div.appendChild(h2)

let h3 =document.createElement('h3');
h3.className = 'h3';
let h3text =document.createTextNode('This is an h3');
h3.appendChild(h3text);
div.appendChild(h3)

let h4 =document.createElement('h4');
h4.className = 'h4';
let h4text =document.createTextNode('This is an h4');
h4.appendChild(h4text);
div.appendChild(h4)

let h5 =document.createElement('h5');
h5.className = 'h5';
let h5text =document.createTextNode('This is an h5');
h5.appendChild(h5text);
div.appendChild(h5)

let h6 =document.createElement('h6');
h6.className = 'h6';
let h6text =document.createTextNode('This is an h6');
h6.appendChild(h6text);
div.appendChild(h6)

//Create and array of 8 colors, add an event listener that changes the color
//of a heading to a random color from the array when it is double clicked.
let color = ['blue', 'green', 'yellow', 'purple', 'aqua', 'pink', 'red', 'orange'];

function getRandomColor() {
    let randomColor= color[Math.floor(Math.random()*color.length)];
    return randomColor
}

h1.addEventListener('click', function(){
    let randomColor = getRandomColor();
    h1.style.color = randomColor;
})

h2.addEventListener('click', function(){
    let randomColor = getRandomColor();
    h2.style.color = randomColor;
})

h3.addEventListener('click', function(){
    let randomColor = getRandomColor();
    h3.style.color = randomColor;
})

h4.addEventListener('click', function(){
    let randomColor = getRandomColor();
    h4.style.color = randomColor;
})

h5.addEventListener('click', function(){
    let randomColor = getRandomColor();
    h5.style.color = randomColor;
})

h6.addEventListener('click', function(){
    let randomColor = getRandomColor();
    h6.style.color = randomColor;
})

//Add a button in the index.html, give this button 
//text that says "Click to add new list item"

let button = document.createElement('button');
let btntext = document.createTextNode('Click to add new list item');
button.appendChild(btntext);
div.appendChild(button);
button.className = 'listButton';

//write a function that inserts a list item, have the 
//first item say "This is list item 1" and any subsequent 
//list item should have the number incremented by 1.
let ul = document.createElement('ul');
div.appendChild(ul);

let l = 1;
function addTolist() {
    let li = document.createElement('li');
    ul.appendChild(li);
    let litext = document.createTextNode(`This is a list item ${l}`);
    li.appendChild(litext);
    l = (l + 1);


    //Using the same random color function created above,
    //apply an event listener that when a list item is clicked 
    //once, it changes the color of the font to one fo the 8 random colors.
    li.addEventListener("click", function(){  
        let randomColor = getRandomColor();
        li.style.color = randomColor;
    });


//Create a function that if a list item is double clicked it removes the list
// item from the DOM.
    li.addEventListener("dblclick", function(){
        this.remove();
    });
}

//Create an event listener that calls the new list item function every time the button is clicked.
button.addEventListener("click", addTolist);


});
