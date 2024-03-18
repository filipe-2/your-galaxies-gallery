slides = document.querySelectorAll('.slide');

function switchSlide(slide) {
    // Removes active class from previous slide before showing the clicked one
    removeActiveClasses();

    // Shows the clicked slide
    slide.classList.add('active');
}


// Function to remove active class from slides
function removeActiveClasses() {
    // loops through each slide and removes its active class if included
    slides.forEach(slide => slide.classList.remove('active'));
}


// Adds click event to each slide
slides.forEach(slide => slide.addEventListener('click', () => switchSlide(slide)));