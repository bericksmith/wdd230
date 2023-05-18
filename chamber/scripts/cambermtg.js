app.use(express.static(path.join(__dirname, "scripts")));

const today = new Date().getDay();
const dayOfWeek = today.getDay();

const element = document.getElementById("chambermeet");

if (dayOfWeek === 3 || dayOfWeek === 4) {
    element.style.display = "block";
}