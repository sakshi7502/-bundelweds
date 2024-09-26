<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Florist Profile</title>
    <link rel="stylesheet" href="style_florist_profile.css">
</head>
<body>
    <div class="vendor-profile-container">
        <div class="vendor-header">
            <img src=" logo_florists.jpg" alt="Florist" class="vendor-image">
            <div class="vendor-info">
                <h1 class="vendor-name">Blossom Floral Creations</h1>
                <p class="vendor-location">San Francisco, CA</p>
                <p class="vendor-description">Bringing elegance and beauty to every celebration with our bespoke floral arrangements.</p>
                <div class="vendor-rating">
                    <span class="rating">★★★★★</span>
                    <span class="rating-count">(85 reviews)</span>
                </div>
            </div>
        </div>

        <div class="vendor-services">
            <h2>Services Offered</h2>
            <ul>
                <li>Wedding Floral Arrangements</li>
                <li>Centerpieces</li>
                <li>Bridal Bouquets</li>
                <li>Flower Arches</li>
                <li>Event Floral Decoration</li>
            </ul>
        </div>

        <div class="vendor-gallery">
            <h2>Gallery</h2>
            <div class="gallery-images">
                <img src="photo1.jpeg" alt="Gallery Image 1">
                <img src="photo2.jpeg" alt="Gallery Image 2">
                <img src="photo3.jpeg" alt="Gallery Image 3">
                <img src="photo4.jpeg" alt="Gallery Image 4">
            </div>
        </div>

        <div class="vendor-contact">
            <h2>Contact Information</h2>
            <p>Email: <a href="mailto:info@florist.com">info@florist.com</a></p>
            <p>Phone: <a href="tel:+1234567890">(123) 456-7890</a></p>
            <p>Website: <a href="http://floristwebsite.com" target="_blank">floristwebsite.com</a></p>
        </div>

        <button class="connect-button" onclick="connectFlorist()">Connect to Florist</button>

        <div class="vendor-reviews">
            <h2>Reviews</h2>
            <div class="review">
                <p class="review-text">"Absolutely gorgeous arrangements for our wedding!"</p>
                <p class="review-author">- Emma & Lucas</p>
            </div>
            <div class="review">
                <p class="review-text">"The flowers were beyond perfect, exactly as we envisioned!"</p>
                <p class="review-author">- Olivia & Noah</p>
            </div>
            <!-- Add more reviews as needed -->
        </div>
    </div>

    <script src="script_florist_profile.js"></script>
</body>
</html>
