// Define DOM Variables
const register = document.querySelector("#register");
// const formFields = document.querySelectorAll(".formfield");
// const firstName = document.querySelector("#firstName");
// const lastName = document.querySelector("#lastName");
// const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirmPassword");
const signUpBtn = document.querySelector("#signUp");
const userInputs = document.querySelectorAll("input");
const labels = document.querySelectorAll("#label");
// console.log(userInputs);
// const showPassword = document.querySelector("#showPassword");



// Attach Event Listener for form using addEventListener();
register.addEventListener("submit", (event) => {
    // Prevent the form from actually submitting to a server, since we do not have a server setup yet.
    event.preventDefault();

    // Develop ulitily / helper functions

    // Create a function that shows correct error message for each required field

    function showError(){
        for(let i = 0; i < userInputs.length; i++) {
            let formField = userInputs[i].parentElement;
            let errMsg = formField.querySelector("small");

            if (userInputs[i].value === "" && labels[i].innerHTML.includes("*")) {
                formField.classList.add("error");
                errMsg.textContent = `Please provide ${userInputs[i].name}`;
            } else {
                formField.classList.remove("error");
                errMsg.textContent = null;
            };
        };
    };
    showError();


    // Validating Password
    function validatePassword() {

        // Should not begin with a digit                 -^(?=.*\d)
        // Any string to lowercase                       -(?=.*[a-z])
        // Any string to uppercase                       -(?=.*[A-Z])
        // Any string within a-z, A-z, and 0-9           -(?=.*[^a-zA-Z0-9])
        // Not followed by a whitespace character        -(?!.*\s)
        // Sequence of 8 to 20 characters                -.{8,20}
        let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/

        if (password.value.length < 8) {
            let formfield = password.length
        }
    }


    validatePassword();

    function confirmPassword() {
        let passwordNotMatch = document.querySelectorAll("small"); 
        if (password.value === confirmPass.value) {
            console.log("Same password");
        } else {
            passwordNotMatch[6, 7];
        }
    }

    confirmPassword()
});


// function showPass() {
//     const showPasss = document.querySelector("#showPassCheck");
//     if (showPasss.checked) {
//         password.type = "text";
//         console.log('Hello');
//     } else {
//         password.type = "password";
//     };
// };

// showPassword.addEventListener("click", showPass());