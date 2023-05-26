function calculateBmi(weight, height) {
    return (weight * 703) / (height * height);
}

function idealWeight(gender, height) {
    if (gender == 'male'){
        ideal = Math.round(56.2*2.20462+(height*1-60)*1.41*2.20462)*1 
    } else {
        ideal= Math.round(53.1*2.20462+(height*1-60)*1.36*2.20462)*1
    }
    return ideal;
}

function calculateBMR(gender, weight, height, age) {
    if (gender === 'male') {
        return (4.536 * weight) + (15.88 * height) - (5 * age) + 5;
      } else if (gender === 'female') {
        return (4.536 * weight) + (15.88 * height) - (5 * age) - 161;
      } else {
        return null;
      }
  }


function calculateBodyFat(gender, age, bmi) {
    if (gender === 'male') {
        return (1.20 * bmi) + (0.23 * age) - 16.2;
    } else if (gender === 'female') {
        return (1.20 * bmi) + (0.23 * age) - 5.4;
    } else {
        return null;
    }
}

function displayHealthData() {
    const element = document.getElementById("results");
    element.style.display = "block";
}


function bmiLevelsOutput() {

    const bmiLevels = {
        bmiInfo: [
          {
            category: "Underweight (Severe thinness)",
            range: "< 16.0",
          },
          {
            category: "Underweight (Moderate thinness)",
            range: "16.0 - 16.9",
          },
          {
            category: "Underweight (Mild thinness)",
            range: "17.0 - 18.4",
          },
          {
            category: "Normal range",
            range: "18.5 - 24.9",
          },
          {
            category: "Overweight (Pre-obese)",
            range: "25.0 - 29.9",
          },
          {
            category: "Obese (Class I)",
            range: "30.0 - 34.9",
          },
          {
            category: "Obese (Class II)",
            range: "35.0 - 39.9",
          },
          {
            category: "Obese (Class III)",
            range: "≥ 40.0",
          },
        ],
      };
      
      document.querySelector("#bmilevels").innerHTML = bmiLevels.bmiInfo
        .map((bmiInfo) => `<li>${bmiInfo.category} - ${bmiInfo.range}</li>`)
        .join("");
      


}

function calculateHealth() {
    let weight = parseInt(document.querySelector("#weight").value);
    let height = parseInt(document.querySelector("#height").value);
    let age = parseInt(document.querySelector("#age").value);
    let gender = document.querySelector("#gender").value;
    let bmiresult = calculateBmi(weight, height);
    let bodyfat = calculateBodyFat(gender, age, bmiresult);
    let weightresult = idealWeight(gender, height);
    let bmrresult = calculateBMR(gender, weight, height, age);

    document.querySelector("#bmi").textContent = bmiresult.toFixed(2);
    document.querySelector("#bodyfat").textContent = bodyfat.toFixed(2);
    document.querySelector("#idealweight").textContent = weightresult.toFixed(0);
    document.querySelector("#bmr").textContent = bmrresult.toFixed(2);


    bmiLevelsOutput();
    displayHealthData();

}

document.querySelector("#calculatehealth").addEventListener("click", calculateHealth);
