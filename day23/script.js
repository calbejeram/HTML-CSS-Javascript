// Variables

// const givenArr = [
//     "John",
//     "Smith",
//     "Volvula",
//     "Mariang Palad",
//     "Guns and Roses"
// ];

// let longestStr = "";

// // Find the longest string in an array
// for (let i=0; i < givenArr.length; i++) {
//     if (givenArr[i].length > longestStr.length) {
//         longestStr = givenArr[i];
//     }
// }

// console.log(longestStr);



// // Reversing a string
// let sampleString = "Javascript";
// console.log(sampleString.split('').reverse().join(''));

// ----------------------------------------------------------------------------------------------------------

// Get elemends by ID
let paragraph1 = document.getElementById('p1');
// console.log(paragraph1);
document.getElementById('p1').style.color = 'white';
document.getElementById('p1').style.backgroundColor = 'red';


// Get element by Name

// Assign document object to variables
let ratings = document.getElementsByName('rate');
let showRate = document.getElementById('output');
let submitBtn = document.getElementById('btn-rate');

// Select the submit button by its ID, then listen to the click event.
submitBtn.addEventListener("click", displayRate)

// The function that loops through the radio buttons which show the selected value at the output element.
function displayRate() {
    ratings.forEach((rating) => {
        // console.log(rating);
        if (rating.checked) {
            showRate.innerText = `You have selected ${rating.value}`
        }
    });
}

// Get element by Tag name
let headings = document.getElementsByTagName('h2');
let countBtn = document.getElementById('btn-count').addEventListener("click", () => {
    alert(`The total h2 tag is ${headings.length}`);
})


// Get elements by Class Name
let menu = document.getElementById('menu');
let items = menu.getElementsByClassName('item');

for(let i=0; i < items.length; i++) {
    // console.log(items[i].innerText);
}


// Query Selectors by Class Name
let myClass = document.querySelector('.myClass');
// console.log(myClass.innerText)
myClass.style.color = 'blue';

let responseBox = document.querySelector('div');
responseBox.innerText = 'Sample text';


// Query Selector All
let sampleBox = document.querySelector('#sample');
let paragraphs = sampleBox.querySelectorAll('p');
let clickableBtn = document.getElementById('clickableBtn');

clickableBtn.addEventListener('click', () => {
    for(let i=0; i<paragraphs.length; i++) {
        paragraphs[i].style.backgroundColor = 'red';
    }
});


// Challenge
let animalSelect = document.querySelector('#animals');
let options = animalSelect.querySelectorAll('option')
let removeBtn = document.getElementById('rmvBtn').addEventListener('click', () => {
    console.log(options);
})