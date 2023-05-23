const speed = parseFloat(document.querySelector("#speed").textContent);
const temp = parseFloat(document.querySelector("#tempurature").textContent);
const f = 35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16
if (temp <= 50 && speed > 3) {
windchill= f.toFixed(1);
}
else {
    windchill = "NA";
}
document.getElementById("windchill").innerHTML = windchill;

