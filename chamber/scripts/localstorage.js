const lastvisitElement = document.getElementById("last-visit");

// 1000 milliseconds in 1 second
// 60 seconds in 1 minute
// 60 minutes in an hour
// 24 hours in 1 day.
const msForDay = 1000 * 60 * 60 * 24;

let lastVisitTime = Number(window.localStorage.getItem("visittime-ls"));

if (lastVisitTime !== 0) {
  const now = new Date();
  lastvisitElement.textContent = Math.round((now.getTime() - lastVisitTime) / msForDay);
} else {
  lastvisitElement.textContent = `Welcome! This is your first visit!`;
}

localStorage.setItem("visittime-ls", now.getTime());