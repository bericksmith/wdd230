
    if (typeof(Storage) !== "undefined") {
      
        const customDrink = localStorage.getItem("customDrink");
              
        if (customDrink > 0) {
            document.getElementById("drinkInfo").innerHTML = `
            <form action="fresh.html">
            <button class="customdrinkbtn" type="submit">
            You have created ${customDrink} Custom Drinks! Create another?
            </button>
            </form>
            `;

        } else {
            document.getElementById("drinkInfo").innerHTML = `            
            <form action="fresh.html">
            <button class="customdrinkbtn" type="submit">
            You have created ${customDrink} Custom Drinks! Create one now?
            </button>
            </form>`;
        }
        
        } else {
 
        document.getElementById("drinkInfo").innerHTML = "<p>Web storage is not supported in this browser.</p>";
        }


          