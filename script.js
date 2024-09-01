//your JS code here. If required.
function setBackgroundImage() {
    // Get the current screen orientation
    const isPortrait = window.innerHeight > window.innerWidth;

    // Set the background image based on orientation
    if (isPortrait) {
        document.body.style.backgroundImage = "url('https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg')";
    } else {
        document.body.style.backgroundImage = "url('https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg')";
    }
}

// Set the initial background image when the page loads
window.onload = setBackgroundImage;

// Update the background image when the window is resized or orientation changes
window.onresize = setBackgroundImage;
