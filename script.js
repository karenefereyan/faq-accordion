let icons = document.getElementsByClassName("dropdown");
let boldText = document.querySelectorAll(".accordion");
let i;
let j;
let a;

for(i=0; i<icons.length; i++){
    icons[i].addEventListener("click", function(){
        let panelText = this.parentElement.nextElementSibling;
        panelText.classList.toggle("show");
    })
}
