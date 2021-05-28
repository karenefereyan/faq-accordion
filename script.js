let arrows = document.querySelectorAll(".dropdown");

//Loop through all the question items and show the answer
const arrowloop = arrows.forEach(e => {
    e.addEventListener("click", displayText);
});


function displayText(e){
    const listContainer = e.target.parentElement.parentElement;
    const arrow = e.target;

    
    console.log("List container is", listContainer);
    console.log("arrow is", arrow);

    const questionHeading  = listContainer.querySelector(".accordion p");
    const answer = listContainer.querySelector(".panel");

    console.log("Answer is", answer);
    console.log("Heading is", questionHeading);
    
    if (answer.style.display === "block") {
        answer.style.display = "none";
        questionHeading.style.color = "hsl(240, 6%, 50%)";
        questionHeading.style.fontWeight="normal";
        arrow.style.transform = "rotate(0deg)";
      } else {
        answer.style.display = "block";
        questionHeading.style.color = "hsl(237, 12%,33%)";
        questionHeading.style.fontWeight="bold";
        arrow.style.transform = "rotate(180deg)";
      }
}