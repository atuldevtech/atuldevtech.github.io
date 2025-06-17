// ========= Scroll-trigger Animation ========= //
const revealElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}, {
  threshold: 0.1
});

revealElements.forEach((el) => {
  el.classList.add("hidden"); // hide initially
  observer.observe(el);
});


// ========= Contact Form Logic ========= //
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector('input[placeholder="Your Name"]').value.trim();
  const email = form.querySelector('input[placeholder="Your Email"]').value.trim();
  const message = form.querySelector("textarea").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  // Simulate sending (replace with actual logic)
  alert(`Thank you, ${name}! Your message has been sent.`);
  form.reset();
});
