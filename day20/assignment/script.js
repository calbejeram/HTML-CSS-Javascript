const startButton = document.getElementById('start-button');

startButton.addEventListener("click", calculate);


function calculate() {
    
    let willContinue = true;

    while (willContinue) {
        const userInputOne = Number(prompt("Enter the first number:"));
        const userInputTwo = Number(prompt("Enter the second number:"));

        const getOperator = prompt("Choose an operation: '+', '-', '*', '/'");

        let result;

        if (getOperator == "+") {
            result = userInputOne + userInputTwo;
            alert(`Result: ${userInputOne} ${getOperator} ${userInputTwo} = ${result}`);
        } else if (getOperator == "-") {
            result = userInputOne - userInputTwo;
            alert(`Result: ${userInputOne} ${getOperator} ${userInputTwo} = ${result}`);
        } else if (getOperator == "*") {
            result = userInputOne * userInputTwo;
            alert(`Result: ${userInputOne} ${getOperator} ${userInputTwo} = ${result}`);
        } else if (getOperator == "/") {
            if (userInputOne == 0 || userInputTwo == 0) {
                alert(`Result: Oops! Cannot divide to 0`)
            } else {
                result = userInputOne / userInputTwo;
                alert(`Result: ${userInputOne} ${getOperator} ${userInputTwo} = ${result}`);
            }
        } else {
            alert("Invalid Input.");
            break;
        }

        const askUser = prompt("Do you still want to use my mini calculator? type 'Y' if Yes, 'N' if No.");
        willContinue = askUser.toLowerCase() === "y";
    }
}