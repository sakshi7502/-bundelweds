// script_caterer_profile.js

// Functionality to handle leaving reviews
document.getElementById("submit-review").addEventListener("click", function() {
    var reviewText = document.getElementById("review-text").value;
    var reviewAuthor = document.getElementById("review-author").value;

    if (reviewText && reviewAuthor) {
        // Create a new review element
        var newReview = document.createElement("div");
        newReview.classList.add("review");

        var reviewTextElement = document.createElement("p");
        reviewTextElement.classList.add("review-text");
        reviewTextElement.textContent = `"${reviewText}"`;

        var reviewAuthorElement = document.createElement("p");
        reviewAuthorElement.classList.add("review-author");
        reviewAuthorElement.textContent = `- ${reviewAuthor}`;

        newReview.appendChild(reviewTextElement);
        newReview.appendChild(reviewAuthorElement);

        // Append the new review to the reviews section
        var reviewsSection = document.querySelector(".vendor-reviews");
        reviewsSection.appendChild(newReview);

        // Clear the form inputs
        document.getElementById("review-text").value = "";
        document.getElementById("review-author").value = "";
    } else {
        alert("Please fill in both the review text and your name.");
    }
});

// Redirect to the contact page when the connect button is clicked
document.querySelector(".connect-button").addEventListener("click", function() {
    window.location.href = "caterer_connection.html";
});
