// Day 10: Event Handling

// Activity 1: Basic Event Handling

// Task 1: Add a click event listener to a button that changes the text content of a paragraph.

let btn = document.getElementById('id1')
let pEle = document.getElementsByTagName('p')[0]
btn.addEventListener('click', () => {
    pEle.innerText = "Hi, this is new paragraph after changing it through the button..."
})

// Task 2: Add a double-click event listener to an image that toggles its visibility.

let img = document.getElementById('toggleImage')
img.addEventListener('dblclick', () => {
    if (img.style.visibility === 'hidden')
        img.style.visibility = 'visible'
    else img.style.visibility = 'hidden'
})

// Activity 2: Mouse Events

// Task 3: Add a mouseover event listener to an element that changes its background color. 

let divEle = document.getElementById('id2')
divEle.addEventListener('mouseover', () => {
    divEle.style.backgroundColor = 'pink'
})

// Task 4: Add a mouseout event listener to an element that resets its background color.

divEle.addEventListener('mouseout', () => {
    divEle.style.backgroundColor = ''
})

// Activity 3: Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

let inputEle = document.getElementById('keydown')
inputEle.addEventListener('keydown', (event) => {
    console.log(event.key)
})

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

let inputEle2 = document.getElementById('inputField');
let para = document.getElementById('displayPara');

inputEle2.addEventListener('keyup', (event) => {
    let currentValue = event.target.value;
    para.textContent = currentValue;
});

// Activity 4: Form Events

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console. 

let form = document.getElementById('myForm')
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let formData = new FormData(form)
    for (let entry of formData.entries())
        console.log(`${entry[0]} : ${entry[1]}`)
})

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

let selectEle = document.getElementById('mySelect')
let selectedValuePara = document.getElementById('selectedValue')

selectEle.addEventListener('change', () => {
    selectedValuePara.textContent = `Selected value : ${selectEle.value}`
})

// Activity 5: Event Delegation

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

let selectedList = document.getElementById('selectList')
selectedList.addEventListener('click', (event) => {
    console.log(event.target.textContent)
})

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

let parentElement = document.getElementById('parentElement')

let newChild = document.createElement('div')
newChild.textContent = 'New Dynamic Child'
newChild.classList.add('dynamicChild')
parentElement.appendChild(newChild)

parentElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('dynamicChild'))
        console.log(event.target.textContent)
})




