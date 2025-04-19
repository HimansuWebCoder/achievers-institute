          const iframe = document.querySelector(".youtube-video");
          const videoForwardBtn = document.querySelector("#video-forwardbtn");
          const videoBackwardBtn = document.querySelector("#video-backwardbtn");
          console.log(iframe)

          let videoLists = ["https://www.youtube.com/embed/T7ly5H1k9gM?si=7pWHTUW-yyIUtbkQ", "https://www.youtube.com/embed/tgbNymZ7vqY", "https://www.youtube.com/embed/L59WRZV_XRw?si=y3XqW3F8RYD3qYHV"];

         
          let j = 0;
          iframe.src = videoLists[j];

          function videoIncrement() {
             if (j < videoLists.length-1) {
                j++;
             } else {
                j = 0;
             }
             iframe.src = videoLists[j];
             console.log(videoLists[j])
          }


          function videoDecrement() {
            if (j > 0) {
                j--;
            } else {
                j = videoLists.length-1;
            }
            iframe.src = videoLists[j];
          }

          videoForwardBtn.addEventListener("click", () => {
             videoIncrement();
          })

          // setInterval(() => {
          //   increment();
          // }, 3000)

           videoBackwardBtn.addEventListener("click", () => {
             videoDecrement();
          })

 