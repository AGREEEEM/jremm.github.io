const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const img = document.querySelector(".img");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const secondQuestion = document.querySelectorAll(".question")[1];

yesBtn.addEventListener("click", () => {
  question.innerHTML = "luhhh gagie 2";
  secondQuestion.innerHTML = "i crux u 2 JHHAAHAHHAHAH"; 
  img.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ2SDGQGU66efgBy91On3gP_YY0s9bWhuWmg&s.jpg";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});