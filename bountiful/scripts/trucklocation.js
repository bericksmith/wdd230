const requestURL = 'json/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // Call the displayTruckData function with the JSON data
    displayTruckData(jsonObject['trucks']);
  })
  .catch(function (error) {
    console.log('Error fetching JSON:', error);
  });

// Function to display truck data
function displayTruckData(trucks) {
  let output = document.querySelector(".trucklocations");

  // Clear previous data
  output.innerHTML = "";

  // Create the image element
  let image = document.createElement("img");
  image.src = "images/fruittruck.png";
  image.alt = "Fruit Truck";
  image.classList.add("fruittruck");
  output.appendChild(image);

  // Create the heading element
  let heading = document.createElement("p");
  heading.classList.add("large");
  heading.textContent = "Daily Produce & Juice Truck Locations";
  output.appendChild(heading);

  // Loop through each truck
  for (let i = 0; i < trucks.length; i++) {
    let truck = trucks[i];

    // Construct HTML content for the truck
    let truckHTML = `
      <div class="individualtrucks">
        <p class="large green">${truck.day}</p>
        <hr>
        <p><span class="bold italic">Location:</span> ${truck.city}<br>
        ${truck.address}<br>
        Phone:${truck.phone}</p>
      </div>
    `;

    // Append the truck HTML content to the output element
    output.innerHTML += truckHTML;
  }
}
