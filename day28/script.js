// Form
let frmMovieReview = document.querySelector("#frmMovieReview");
// Input Fields
let movieTitle = document.querySelector("#movieTitle");
let yearReleased = document.querySelector("#yearReleased");
let review = document.querySelector("#review");
let reviewedBy = document.querySelector("#reviewedBy");
// Buttons
let btnAddReview = document.getElementById("btnAddReview");
let btnDisplayReview = document.getElementById("btnDisplayReview");
// Display for All Reviews
let reviewsContainer = document.querySelector("#reviewsContainer pre");
// Table Container
let tableContainer = document.querySelector("#tableContainer")

const movieReviewsArr = [];

const setMovieReviews = (event) => {
  event.preventDefault();

  const movieReviewObj = {
    reviewID: Date.now(),
    movieTitle: movieTitle.value,
    yearReleased: yearReleased.value,
    review: review.value,
    reviewedBy: reviewedBy.value,
  };

  // console.log(movieReviewObj);

  movieReviewsArr.push(movieReviewObj);

  // console.log(movieReviewsArr);

  reviewsContainer.innerHTML = JSON.stringify(movieReviewsArr, null, 2);

  localStorage.setItem("movieReviews", JSON.stringify(movieReviewsArr));

  let allMovieReviews = localStorage.getItem("movieReviews");

  console.log(JSON.parse(allMovieReviews));

  frmMovieReview.reset();
};

btnAddReview.addEventListener("click", setMovieReviews);


// Get data from the Local Storage
btnDisplayReview.addEventListener("click", displayReviews);



function displayReviews(event) {
    event.preventDefault();

    // Create table for Movie Reviews Data
    let table = document.createElement("table");
    let tableHeadings = document.createElement("thead");
    let tableBody = document.createElement("tbody");

    tableContainer.appendChild(table);
    table.appendChild(tableHeadings);
    table.appendChild(tableBody);

    let newArr = [];
    let headerData = [
        "ID",
        "TITLE",
        "Year Shown",
        "Movie Review",
        "Reviewed By"
    ]

    newArr = JSON.parse(localStorage.getItem("movieReviews"))

    let valuess = Object.values(newArr[0]);

    for (let i=0; i < headerData.length; i++) {
        let tableHeaderData = document.createElement("th");
        let tableRow = document.createElement("tr");
        tableRow.style.border = "1px solid black";
        tableHeadings.appendChild(tableHeaderData);
        tableBody.appendChild(tableRow);
        tableHeaderData.textContent = headerData[i];
        for(let j=0; j < headerData.length; j++) {
            let tableColumn = document.createElement("td");
            tableRow.appendChild(tableColumn);
            tableColumn.style.border = "1px solid black";
            tableColumn.textContent = valuess[j];
        };
    };

    table.setAttribute("border", "2px solid black");
};