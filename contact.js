document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    clearErrors();

    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    let isValid = true;

    if (fullName.value.trim() === '') {
      showError('fullNameError', 'Full Name is required.');
      isValid = false;
    }

    if (email.value.trim() === '') {
      showError('emailError', 'Email is required.');
      isValid = false;
    } else if (!isValidEmail(email.value)) {
      showError('emailError', 'Please enter a valid email address.');
      isValid = false;
    }

    if (subject.value.trim() === '') {
      showError('subjectError', 'Subject is required.');
      isValid = false;
    }

    if (message.value.trim() === '') {
      showError('messageError', 'Message is required.');
      isValid = false;
    }

    if (isValid) {
      successMessage.classList.add('show');
      contactForm.reset();

      setTimeout(() => {
        successMessage.classList.remove('show');
      }, 5000);
    }
  });

  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }

  function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => {
      msg.textContent = '';
      msg.style.display = 'none';
    });
  }

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
