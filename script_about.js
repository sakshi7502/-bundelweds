// Array of image URLs
const images = ['1.jpg', 'wedding2.jpg','2.jpg','3.jpg','4.jpeg'];

// Function to change the image randomly
function changeImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageElement = document.getElementById('random-image');
    imageElement.src = images[randomIndex];
}

// Change image every 5 seconds
setInterval(changeImage, 5000);

// Show more text on button click
document.getElementById("read-more").addEventListener("click", function() {
    const moreText = document.getElementById("more-text");
    if (moreText.style.display === "none") {
        moreText.style.display = "block";
    } else {
        moreText.style.display = "none";
    }
});
