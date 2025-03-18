const sliderContainer = document.querySelector(".slider-container");
const imageContainer = document.querySelector(".image-container");
const images = document.querySelectorAll(".image-slides");

images.forEach((x, i) => {
   x.addEventListener("click", (e) => {
   	  console.log(e.target);
   })
})

