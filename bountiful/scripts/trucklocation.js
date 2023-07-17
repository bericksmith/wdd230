const requestURL = 'json/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    displayTruckData(jsonObject['trucks']);
  })
  .catch(function (error) {
    console.log('Error fetching JSON:', error);
  });

function displayTruckData(trucks) {
  let output = document.querySelector(".trucklocations");

  output.innerHTML = "";

  let image = document.createElement("img");
  image.src = "images/fruittruck.png";
  image.alt = "Fruit Truck";
  image.classList.add("fruittruck");
  output.appendChild(image);

  let heading = document.createElement("p");
  heading.classList.add("large");
  heading.innerHTML = "Daily Produce & Juice Truck Locations<br>** Closed Sundays **";
  output.appendChild(heading);

  for (let i = 0; i < trucks.length; i++) {
    let truck = trucks[i];

    let truckHTML = `
      <div class="individualtrucks">
        <p class="large green">${truck.day}</p>
        <hr>
        <p><span class="bold italic">Location:</span> ${truck.city}<br>
        ${truck.address}<br>
        Phone:${truck.phone}</p>
      </div>
    `;
    
    output.innerHTML += truckHTML;
  }
}
