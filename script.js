var currentSlide = 1;

//open modal
function openModal() {
    document.getElementById("modal").style.display = "block";
    document.querySelector("html").style.overflow = "hidden";
}
//close modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.querySelector("html").style.overflow = "visible";
}
//show selected modal
slide(currentSlide);
//navigation function
function slideNav(n) {
    slide(currentSlide += n);
}

//switch active modal
function slide(n) {
    var slides = document.getElementsByClassName("slide");
    console.log(n);
    console.log(slides.length);
    
    //NAVIGATION
    if (n > slides.length) {
        //if exceeding portfolio size, set to 1st slide
        currentSlide = 1;
    } else if (n < 1) {
        //if less than portfolio size, set to last slide
        currentSlide = slides.length;
    } else {
        currentSlide = n;
    }
    
    //SLIDE VISIBILITY
    //hide all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //show active slide
    slides[currentSlide - 1].style.display = "block";
}