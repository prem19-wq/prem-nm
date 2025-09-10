// Contact Form Submission (demo only)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name && email && message) {
    document.getElementById("formMessage").innerText = "✅ Message sent successfully!";
    this.reset();
  } else {
    document.getElementById("formMessage").innerText = "❌ Please fill out all fields.";
  }
});