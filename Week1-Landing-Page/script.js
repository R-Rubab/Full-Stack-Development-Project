console.log("Welcome to Decode Labs Internship!");
const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ==========================
// Contact Form Validation
// ==========================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        subject === "" ||
        message === ""
    ) {

        alert("Please fill in all fields.");

        return;

    }

    alert("Message sent successfully! 🎉");

    form.reset();

});