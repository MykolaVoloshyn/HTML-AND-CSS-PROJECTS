let slideIndex = 1;

function openLightbox() {
    document.getElementById("myLightbox").style.display = "block";
}

function closeLightbox() {
    document.getElementById("myLightbox").style.display = "none";
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    /*[slideIndex -1] because we are referring to a list and counting there
    starts with 0 not 1*/
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

// Next/previous controls
function showAnotherSlide(n) {
    showSlides((slideIndex += n));
}
