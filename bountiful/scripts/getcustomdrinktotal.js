
    if (typeof(Storage) !== "undefined") {
      
        const myCustomDrink = localStorage.getItem("customDrink");
              
        if (myCustomDrink > 0) {
            document.getElementById("drinkInfo").innerHTML = `
            <form action="fresh.html">
            <button class="customdrinkbtn" type="submit">
            You have created ${myCustomDrink} Custom Drinks! Create another?
            </button>
            </form>
            `;

        } else {
            document.getElementById("drinkInfo").innerHTML = `            
            <form action="fresh.html">
            <button class="customdrinkbtn" type="submit">
            You have created 0 Custom Drinks! Create one now?
            </button>
            </form>`;
        }
        
        } else {
 
        document.getElementById("drinkInfo").innerHTML = "<p>Web storage is not supported in this browser.</p>";
        }


          