document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formResponse').textContent = "✅ Message sent successfully!";
  this.reset();
});