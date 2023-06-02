
// Copyright and date modified
try {
  let options = {
    year: "numeric",
  };
  document.querySelector("#copyright").textContent =
    new Date().toLocaleDateString("en-US", options);
} catch (e) {
  alert("Error with copyright year.");
}

try {
  document.getElementById("dateModified").textContent = document.lastModified;
} catch (e) {
  alert("Error finding last modified date.");
}

try {
  let options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
  };
  document.querySelector("#todayHeading").textContent =
    new Date().toLocaleDateString("en-UK", options);
} catch (e) {
  alert("Error with today's date.");
}


// Hamburger Menu
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}  

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;



// Chamber meeting messages display Monday and Tuesday
const today = new Date().getDay();

const element = document.getElementById("chambermeet");

if (today === 1 || today === 2) {
    element.style.display = "block";
}




// Lazyload
const allImages = document.querySelectorAll("img[data-src]")

const lazyLoad = (img) => {
    img.setAttribute("src", img.getAttribute("data-src"))
    img.onload = () => {
        img.removeAttribute("data-src")
        img.className = "ph"
    };
};

const options = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
}

if ('IntersectionObserver' in window) {
    const obsrvr = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                lazyLoad(item.target)
                observer.unobserve(item.target)
            }
        })
    }, options)
    allImages.forEach((img) => {
        obsrvr.observe(img)
    })
}
else {
    allImages.forEach((img) => {
        lazyLoad(img)
    })
}

