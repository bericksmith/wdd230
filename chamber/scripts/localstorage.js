const lastvisitElement = document.getElementById("last-visit");
const msForDay = 1000 * 60 * 60 * 24;

let lastVisitTime = Number(window.localStorage.getItem("visittime-ls"));
let now = new Date(); // Declare and assign the 'now' variable

if (lastVisitTime !== 0) {
  lastvisitElement.textContent = Math.round((now.getTime() - lastVisitTime) / msForDay);
} else {
  lastvisitElement.textContent = `Welcome! This is your first visit!`;
}

localStorage.setItem("visittime-ls", now.getTime());