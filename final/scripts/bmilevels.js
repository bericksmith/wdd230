
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
  