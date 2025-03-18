const menuBtn = document.querySelector("#menu-box-container");
const menusItems = document.querySelector("#menu-items");
const closeMenu = document.querySelector("#close-menu");
const menus = document.querySelector(".menus");


menuBtn.addEventListener("click", () => {
   menusItems.style.display = "block";
   menus.style.display = "none"
   console.log("hello")
})

closeMenu.addEventListener("click", () => {
   menusItems.style.display = "none";
   menus.style.display = "block"
})

document.querySelectorAll('.faq-question').forEach(item => {
            item.addEventListener('click', () => {
                const answer = item.nextElementSibling;
                answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            });
        });



// Images Slider
const nextEl = document.querySelector(".next");

const prevEl = document.querySelector(".prev");

const imgsEl = document.querySelectorAll(".image-slides");

const imageContainerEl = document.querySelector(".image-container");

let currentImg = 1;

let timeout;

nextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}
