const arr = document.querySelectorAll(".arrow");

const arrLoop = arr.forEach(e => {
  e.addEventListener("click", showAnswer);
});

function showAnswer(e) {
  const mainBox = e.target.parentElement.parentElement;
  const arrow = e.target;

  const heading = mainBox.querySelector(".question");

  const para = mainBox.querySelector(".answer");
  if (para.style.display === "block") {
    para.style.display = "none";
    heading.style.color = "hsl(240, 6%, 50%)";
    heading.style.fontWeight="normal";
    arrow.style.transform = "rotate(0deg)";
  } else {
    para.style.display = "block";
    heading.style.color = "hsl(237, 12%,33%)";
    heading.style.fontWeight="bold";
    arrow.style.transform = "rotate(180deg)";
  }
}