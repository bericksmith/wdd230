const today = new Date().getDay();

try {
  let options = {
    year: "numeric",
  };
  document.querySelector("#copyright").textContent =
    new Date().toLocaleDateString("en-US", options);
} catch (e) {
  alert("Error with copyright year.");
}

try {
  document.getElementById("dateModified").textContent = document.lastModified;
} catch (e) {
  alert("Error finding last modified date.");
}



