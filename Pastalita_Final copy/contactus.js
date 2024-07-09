document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Reset any previous error messages
        clearErrors();

        // Validate form inputs
        if (!validateName(nameInput.value.trim())) {
            displayError('nameError', 'Please enter your name.');
            return;
        }
        
        if (!validateEmail(emailInput.value.trim())) {
            displayError('emailError', 'Please enter a valid email address.');
            return;
        }
        
        if (!validateMessage(messageInput.value.trim())) {
            displayError('messageError', 'Please enter your message.');
            return;
        }

        // If all inputs are valid, prepare data for submission
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            message: messageInput.value.trim()
        };

        // Simulate sending data to server (replace with actual form submission logic)
        console.log(formData);

        // Display success message
        formMessage.textContent = 'Message sent successfully!';
        
        // Clear the form after submission
        form.reset();
    });

    function validateName(name) {
        return name !== '';
    }

    function validateEmail(email) {
        // Regular expression for basic email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validateMessage(message) {
        return message !== '';
    }

    function displayError(id, message) {
        const errorElement = document.getElementById(id);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    function clearErrors() {
        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('messageError').textContent = '';
        formMessage.textContent = '';
    }
});
