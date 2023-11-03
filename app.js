// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const Btn = document.querySelector(".modal-btn");
const modaless = document.querySelector(".modal-overlay");
const clsBtn = document.querySelector(".close-btn");

// modalBtn.addEventListener("click", function () {
//   modal.classList.add("open-modal");
// });
// closeBtn.addEventListener("click", function () {
//   modal.classList.remove("open-modal");
// });



Btn.addEventListener('click',()=>{
modaless.classList.add('x')
})
clsBtn.addEventListener('click',()=>{
    modaless.classList.remove('x')
})