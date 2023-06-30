    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("customDrink", 0);

        const customDrink = localStorage.getItem("customDrink");
          
        if (customDrink > 0) {
            document.getElementById("drinkInfo").textContent = `${customDrink} Custom Drinks created`;
        } else {
            document.getElementById("drinkInfo").textContent = "Create your first drink!";
        } 

        } else {
        
            
        }


          