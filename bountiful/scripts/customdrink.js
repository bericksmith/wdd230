
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("customDrink", 6);
      
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
            document.getElementById("drinkInfo").innerHTML = "<p>Create your first custom drink!</p>";
        }
        
        } else {
 
        document.getElementById("drinkInfo").innerHTML = "<p>Web storage is not supported in this browser.</p>";
        }


          