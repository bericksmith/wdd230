
const today = new Date().getDay();


const element = document.getElementById("chambermeet");

if (today === 1 || today === 5) {
    element.style.display = "block";
}