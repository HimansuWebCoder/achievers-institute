 const images = document.querySelector(".image-container > img");
          const forwardBtn = document.querySelector(".forwardbtn");
          const backwardBtn = document.querySelector(".backwardbtn");
            const modalContainer = document.querySelector(".modal-image-container");
            const modalImg = document.querySelector(".modal-image-container img");
            const modalImgCloseBtn = document.querySelector("#close-modal-btn");


          let imagesLists = ["images/photo1.jpg", "images/photo2.jpg", "images/photo3.jpg", "images/photo4.jpg", "images/photo5.jpg", "images/photo6.jpg", "images/photo7.jpg", "images/photo8.jpg", "images/photo9.jpg", "images/photo10.jpg", "images/photo11.jpg", "images/photo12.jpg", "images/photo13.jpg", "images/photo14.jpg"];

         
          let i = 0;
          images.src = imagesLists[i];

          function increment() {
             if (i < imagesLists.length-1) {
                i++;
             } else {
                i = 0;
             }
             images.src = imagesLists[i];
             console.log(images)
          }


          function decrement() {
            if (i > 0) {
                i--;
            } else {
                i = imagesLists.length-1;
            }
            images.src = imagesLists[i];
          }

          forwardBtn.addEventListener("click", () => {
             increment();
                // images.style.transition = "transform 0.3s ease-in-out"
                // images.style.transform = "scale(1.1)"

                // setTimeout(() => {
                // images.style.transform = "scale(1.0)"
                // }, 100)
          })

          setInterval(() => {
            increment();
          }, 3000)

           backwardBtn.addEventListener("click", () => {
             decrement();
          })

 
               images.addEventListener("click", (e) => {
                    modalImg.src = e.target.src;
                    modalContainer.style.display = "block";

               })

               modalImgCloseBtn.addEventListener("click", () => {
                    modalContainer.style.display = "none";
               })