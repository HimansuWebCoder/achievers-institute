const menuBtn = document.querySelector("#menu-box-container");
const menusItems = document.querySelector("#menu-items");
const closeMenu = document.querySelector("#close-menu");
const menus = document.querySelector(".menus");


menuBtn.addEventListener("click", () => {
   menusItems.style.display = "block";
   menuBtn.style.visibility = "hidden";
   console.log("hello")
})

console.log(menusItems); // Check if it's null
console.log(menus);      // Check if it's null


closeMenu.addEventListener("click", () => {
   menusItems.style.display = "none";
   menuBtn.style.visibility = "visible";
   // menus.style.display = "block"
})





document.querySelectorAll('.faq-question').forEach(item => {
            item.addEventListener('click', () => {
                const answer = item.nextElementSibling;
                answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            });
        });

const buttons = document.querySelectorAll(".card-item-btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        this.classList.toggle("active");
        const descriptions = this.nextElementSibling;
        const plusIcons = this.querySelector(".plus-icon");
        const minusIcons = this.querySelector(".minus-icon");

        if(descriptions.style.maxHeight){
            descriptions.style.maxHeight = null;
            plusIcons.style.display = "block";
            minusIcons.style.display = "none";
        }else{
            descriptions.style.maxHeight = descriptions.scrollHeight + 'px';
            plusIcons.style.display = 'none';
            minusIcons.style.display = 'block';
        }
    });
});


// Images Slider
// const nextEl = document.querySelector(".next");

// const prevEl = document.querySelector(".prev");

// const imgsEl = document.querySelectorAll(".image-slides");

// const imageContainerEl = document.querySelector(".image-container");

// let currentImg = 1;

// let timeout;

// nextEl.addEventListener("click", () => {
//   currentImg++;
//   clearTimeout(timeout);
//   updateImg();
// });

// prevEl.addEventListener("click", () => {
//   currentImg--;
//   clearTimeout(timeout);
//   updateImg();
// });

// updateImg();

// function updateImg() {
//   if (currentImg > imgsEl.length) {
//     currentImg = 1;
//   } else if (currentImg < 1) {
//     currentImg = imgsEl.length;
//   }
//   imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 400}px)`;
//   timeout = setTimeout(() => {
//     currentImg++;
//     updateImg();
//   }, 3000);
// }

       // let imgSlideContainer = document.querySelector(".image-container");
       //  let img = document.querySelectorAll(".image-slides");
       //  let btn = document.querySelector("button");
       //  const nextBtn = document.querySelector(".next");
       //  const prevBtn = document.querySelector(".prev");

       //  let i = 0;

       //  nextBtn.addEventListener("click", () => {
       //      if (i < img.length - 1) {
       //          i++;
       //      } else {
       //        i = 0;
       //      }
       //      imgSlideContainer.style.transform = `translateX(${-i * 300}px)`;
       //  });


       //  prevBtn.addEventListener("click", () => {
       //      if (i > 0) {
       //          i--;
       //      } else {
       //        i = img.length-1;
       //      }
       //      imgSlideContainer.style.transform = `translateX(${-i * 300}px)`;
       //  });


          // setInterval(() => {
          //     if (i < img.length - 1) {
          //       i++;
          //   } else {
          //     i = 0;
          //   }
          //   imgSlideContainer.style.transform = `translateX(${-i * 300}px)`;
          // }, 3000)