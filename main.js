// ===== Hamburger Toggle =====
let menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", function () {
    menuIcon.classList.toggle("active");
    menuIcon.classList.toggle("inactive");
    document.querySelectorAll(".bar").forEach((element) => {
        element.classList.remove("no-animation");
    });
});

// ===== Skills Animation (Intersection Observer) =====
const skills = document.querySelectorAll(".fadeIn");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // show when visible
            } else {
                entry.target.classList.remove("show"); // hide again when not visible
            }
        });
    },
    { threshold: 0.3 }
);

skills.forEach((skill) => observer.observe(skill));

// ===== Navbar Scroll Highlight (Scroll Spy) =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navLinks a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120; // adjust for navbar height
        const sectionHeight = section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
