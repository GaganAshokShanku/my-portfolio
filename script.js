// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// Typing Effect
const text = ["Developer", "Designer", "Student"]; 
let i = 0, j = 0;

function type() {
    if (j < text[i].length) {
        document.getElementById("typing").innerHTML += text[i].charAt(j);
        j++;
        setTimeout(type, 100);
    } else {
        setTimeout(() => {
            document.getElementById("typing").innerHTML = "";
            j = 0;
            i = (i + 1) % text.length;
            type();
        }, 1000);
    }
}
type();

// Scroll Animation
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    faders.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            el.classList.add("show");
        }
    });
});

// Image Modal
function openModal(img) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modalImg").src = img.src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
