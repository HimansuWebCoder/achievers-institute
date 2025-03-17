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