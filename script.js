// Welcome message in the browser console

console.log("Welcome to Elegance Fashion!");

// Change the navigation background when scrolling

window.addEventListener("scroll", function() {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "none";
    }

});