// JS for minimal interactions
const form = document.getElementById('contact-form');
if(form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('form-response').textContent = 'Thank you for reaching out!';
    form.reset();
  });
}

