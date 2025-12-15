// Initialize EmailJS
(function () {
    emailjs.init("6BnjtkHpquwVIuNN1"); // Your Public Key
})();

// Form Submission with EmailJS
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Get submit button
        const submitButton = contactForm.querySelector('.submit-button');
        const originalButtonText = submitButton.innerHTML;

        // Show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Sending...</span>';

        // Prepare template parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
            to_name: "Shiva Ram Reddy" // Your name
        };

        // Send email using EmailJS
        emailjs.send('service_t5e98kd', 'template_1gde513', templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);

                // Show success message
                submitButton.innerHTML = '<i class="fas fa-check"></i><span>Sent Successfully!</span>';
                submitButton.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

                // Reset form
                contactForm.reset();

                // Reset button after 3 seconds
                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalButtonText;
                    submitButton.style.background = '';
                }, 3000);

            }, function (error) {
                console.log('FAILED...', error);

                // Show error message
                submitButton.innerHTML = '<i class="fas fa-times"></i><span>Failed to Send</span>';
                submitButton.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';

                alert('Failed to send message. Please try again or contact me directly via email.');

                // Reset button after 3 seconds
                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalButtonText;
                    submitButton.style.background = '';
                }, 3000);
            });
    });
}
