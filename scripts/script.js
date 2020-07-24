document.addEventListener('DOMContentLoaded', function (event) {
    // array with texts to type in typewriter
    var dataText = ["Hi, My name is Tanmay Khabia.", "Welcome to my website", "Hope you like it!"];

    // type one text in the typwriter
    // keeps calling itself until the text is finished

    function typeWriter(text, i, fnCallback) {
        // chek if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            document.getElementById("typing_text").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true">|</span>';
            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 2000);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 2000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    // start the text animation
    
    StartTextAnimation(0);
    
});
var slideIndex = 0;
function changeSlideIndex(n) {
    slideIndex = n - 1;
    showSlides();
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active_slideshow", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active_slideshow";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}