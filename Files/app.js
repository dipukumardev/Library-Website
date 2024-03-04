//  IMAGE SLIDER 
const slides = document.querySelectorAll(".slider");
var conter = 0;
// console.log(slides)
slides.forEach(
    (slider, index) => {
        slider.style.left = `${index * 100}%`
    }
)
const goPrev = () => {
    if (conter != 0) {
        conter--;
        slideImage();
    }
}
const goNext = () => {
    if (conter < slides.length - 1) {
        conter++;
        slideImage()
    }
}
const slideImage = () => {
    slides.forEach(
        (slides) => {
            slides.style.transform = `translateX(-${conter * 100}%)`
        }
    )
}









