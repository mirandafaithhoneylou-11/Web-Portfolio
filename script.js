

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        header.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.08)";
    } else {
        header.style.boxShadow = "none";
    }
});


// ACTIVE NAVIGATION LINK//

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

function updateActiveLink() {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);


// SCROLL REVEAL ANIMATION//

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .certificate-card, .stat-card"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    element.classList.add("hidden");
    observer.observe(element);
});


// SMOOTH SCROLL FOR NAVIGATION//

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// HERO IMAGE FLOAT EFFECT//

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    let direction = 1;

    setInterval(() => {

        heroImage.style.transform =
            direction === 1
                ? "translateY(-8px)"
                : "translateY(0px)";

        direction *= -1;

    }, 1800);

}

const footer = document.querySelector("footer p");

if (footer) {

    const year = new Date().getFullYear();

    footer.innerHTML = `© ${year} Faith Honey Lou Miranda. All Rights Reserved.`;

}

console.log("Portfolio loaded successfully.");
