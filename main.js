//button-interactie

let sendBtn = document.querySelector('#btn-submit');

sendBtn.addEventListener('click', () => {
  sendBtn.classList.add('sent');
  sendBtn.disabled = true;

setTimeout(() => {
  sendBtn.classList.remove('sent');
  sendBtn.disabled = false;
}, 2000); 
});


//popover-interactie

const cards = document.querySelectorAll(".popover-trigger");
const popover = document.getElementById("popover");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closePopover");

cards.forEach(card => {
  card.addEventListener("click", () => {
    popover.classList.add("active");
    overlay.classList.add("active");
  });
});

closeBtn.addEventListener("click", closePopover);
overlay.addEventListener("click", closePopover);

function closePopover() {
  popover.classList.remove("active");
  overlay.classList.remove("active");
}