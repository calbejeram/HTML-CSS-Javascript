// Variables

// Creating an element <p></p>
let para = document.createElement("p");
para.className = "pClass";
// Inserting a text to an element
let textNode = document.createTextNode("This is a new paragraph.");
// Parent Div
let parent = document.querySelector("#parentDiv");
para.appendChild(textNode);
// This adds the paragraph (textNode) in our parent div (parent)
parent.appendChild(para);

// parent.insertBefore();
let child = document.querySelector("#p1");
parent.insertBefore(para, child);

// parentElement.removeChild(childElement);
parent.removeChild(child);


let newPara = document.createElement("p");
let newTextNode = document.createTextNode("This is an example of replacing an element to a new text.");
newTextNode.textContent = "This is the new text content";
newPara.className = "pClass";
newPara.style.backgroundColor = "gray";
newPara.appendChild(newTextNode);

let oldPara = document.querySelector("#p2");

parent.replaceChild(newPara, oldPara);

// ==================================================================

// Manipulating content of an element
let divContent = document.querySelector("#divContent");
console.log(divContent.innerHTML);
console.log(divContent.innerHTML);
console.log(divContent.textContent);

// Replacing attribute href form google to bing (https://www.bing.com)
let a = document.querySelector("#link");
a.href = "https://www.bing.com";
// let a = document.querySelector("#link").setAttribute("href", "https://www.bing.com");


// ==================================================================
// Table div
let tableContainer = document.querySelector("#table");

// Get User input rows
let tableRowss = document.createElement("input");
tableRowss.type = "number";
tableRowss.placeholder = "Type number of rows"
tableRowss.min = 1

// Get User input columns
let tableDataa = document.createElement("input");
tableDataa.type = "number";
tableDataa.placeholder = "Type number of columns"
tableDataa.min = 1

// Userinput container
let userInputContainer = document.querySelector('#userInputs');
userInputContainer.style.marginBottom = "10px"
userInputContainer.appendChild(tableRowss);
userInputContainer.appendChild(tableDataa);

function createTable() {
    let newTable = document.createElement("table");
    let tableBody = document.createElement("tBody");

    // Using prompt
    // let tableRows = Number( prompt("Enter the number of rows for your table: "));
    // let tableData = Number(prompt("Enter the number of columns for your table: "));

    // Using input validation
    let tableRows = Number(tableRowss.value);
    let tableData = Number(tableDataa.value);

    for(let i=0; i < tableRows; i++) {
        let tableRow = document.createElement("tr");
        tableBody.appendChild(tableRow);
        for(let j=0; j < tableData; j++) {
            let tableColumn = document = document.createElement("td");
            tableRow.appendChild(tableColumn);
            tableColumn.textContent = `row ${i+1} column ${j+1}`;
        }
    }
    newTable.appendChild(tableBody);
    newTable.style.border = "5px solid black";
    newTable.setAttribute("border", "1px solid");
    newTable.style.marginBottom = "5px";
    tableContainer.appendChild(newTable);
};