  const lastvisitElement = document.getElementById("last-visit")
  const msInDay = 1000 * 60 * 60 * 24;

  let lastVisitTime = Number(window.localStorage.getItem("visittime-ls"));

  if (lastVisitTime !== 0) {
      lastvisitElement.textContent = Math.round((now.getTime() - lastVisitTime)/msInDay);
  } else {
    lastvisitElement.textContent = `Welcome!! This is your first time here!`;
  }

  localStorage.setItem("visittime-ls", now.getTime());
