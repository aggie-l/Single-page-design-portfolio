
const slides = document.querySelectorAll(".slide")
const nextSlide = document.querySelector(".btn-next")
const prevSlide = document.querySelector(".btn-prev")

let currentSlide = 2
let maxSlide = slides.length - 1



// loop through slides and set each slides translateX property to index * 100%
slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`
})


const showNextSlide = () => {
    if (currentSlide === maxSlide) {
        currentSlide = 0
      } else {
        currentSlide++
      }
      
        // move slide by -100%
        slides.forEach((slide, index) => {
          slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`
      })
}

const showPreviousSlide = () => {
    if (currentSlide === 0) {
        currentSlide = maxSlide;
      } else {
        currentSlide--
      }
    
      // move slide by 100%
      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`
      })
}

nextSlide.addEventListener("click", showNextSlide)
prevSlide.addEventListener("click", showPreviousSlide)

document.addEventListener("keydown", function (e) {
    e.key === "ArrowLeft" && showPreviousSlide()
    e.key === "ArrowRight" && showNextSlide()
})