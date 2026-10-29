// ==============================
// MARCURT REAL ESTATE
// script.js
// ==============================

// Mobile Menu
const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// Close menu after clicking a link
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

// Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.style.background = "#fff";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.1)";
        header.style.padding = "14px 8%";
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.15)";
    } else {
        header.style.background = "#fff";
        header.style.boxShadow = "0 2px 15px rgba(0,0,0,.08)";
        header.style.padding = "18px 8%";
        header.style.boxShadow = "none";
    }
});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

// Active Navigation Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Search Button
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {

    document.querySelector("#properties").scrollIntoView({
        behavior: "smooth"
    });

});

// Contact Form
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const phone = "+234 8020400444";

    const text = `Hello Francis!

Name: ${name}
Email: ${email}
Message: ${message}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    form.reset();
});

/* ==============================
 Auto change footer year
 ==============================*/
document.getElementById("year").textContent = new Date().getFullYear();

/*==============================
FAQ ACCORDION
==============================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        // Close all other FAQs
        faqItems.forEach(faq => {
            if(faq !== item){
                faq.classList.remove("active");
                faq.querySelector("span").textContent = "+";
            }
        });

        // Toggle current FAQ
        item.classList.toggle("active");

        const icon = question.querySelector("span");

        if(item.classList.contains("active")){
            icon.textContent = "−";
        }else{
            icon.textContent = "+";
        }

    });

});

const readMoreBtn = document.getElementById("readMoreBtn");
const moreText = document.getElementById("moreText");

readMoreBtn.addEventListener("click", () => {
    if (moreText.style.display === "inline"){
        moreText.style.display = "none";
        readMoreBtn.textContent = "Read More";
    }  else {
        moreText.style.display = "inline";
        readMoreBtn.textContent = "Read Less";
    }
});
