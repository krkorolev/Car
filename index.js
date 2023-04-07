document.addEventListener ('DOMContentLoaded', function (){
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector ('header').classList.toggle ('open')
    })
})



const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
 
  loop: true,
  slidesOffsetAfter: 0,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper1 = new Swiper(".product__slider", {
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  
})




const items = document.querySelector(".questions__items ");
const item = document.querySelector(".item-text");

items.addEventListener("click", openItems);
function openItems(event) {
  findItem = event.target;

  if (findItem.className === "questions__item" || findItem.className === "questions__item color-red" ) {
    findItem.classList.toggle("color-red");
  }

  const itemText = event.target.querySelector(".item-text");
  itemText.style.display =
    itemText.style.display == "none" || itemText.style.display == ""
      ? "block"
      : "none";
}
