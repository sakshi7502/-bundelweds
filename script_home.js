// Language switch functionality
let currentLanguage = 'en';
setInterval(() => {
    if (currentLanguage === 'en') {
        document.getElementById('title-en').style.display = 'none';
        document.getElementById('title-other').style.display = 'block';
        currentLanguage = 'other';
    } else {
        document.getElementById('title-en').style.display = 'block';
        document.getElementById('title-other').style.display = 'none';
        currentLanguage = 'en';
    }
}, 5000);
