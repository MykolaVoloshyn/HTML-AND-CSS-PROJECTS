function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//Displays the first image in the slideshow when the page loads
let slideIndex = 1;
showSlides(slideIndex);

//Changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides((slideIndex += n));
}

//Changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    // This for loop takes each item in the array "slides" and sets the display to none
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // This for loop takes each item in the array "dots" and removes "active" which removes the active styling
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//This code will close the contact form when the user clicks off of it
//The first step is to add an event listener for any clicks on the website
document.addEventListener(
    "click",
    (event) => {
        /* Here we state that if the click happens on the cancel button OR anywhere
        that is not the contact form AND the click does not happen on any element with
        the contact class then call the closeForm() function*/
        if (
            event.target.matches(".cancel") ||
            (!event.target.closest(".form-popup") &&
                !event.target.closest(".Pop_Up_Button") &&
                !event.target.closest(".contact"))
        ) {
            closeForm();
        }
    },
    false
);
