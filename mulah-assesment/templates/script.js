// script.js

document.addEventListener('DOMContentLoaded', function () {
    const checkLoyaltyBtn = document.getElementById('check-loyalty-btn');
    const registrationForm = document.getElementById('registration-form');

    // Redirect to registration.html on button click
    if (checkLoyaltyBtn) {
        checkLoyaltyBtn.addEventListener('click', function () {
            const phone = document.getElementById('phone').value;

            // Validate phone number (you can add more sophisticated validation if needed)
            if (phone.trim() === "") {
                alert('Please enter your mobile number');
            } else {
                sessionStorage.setItem('phoneNumber', phone);
                window.location.href = 'registration.html';
            }
        });
    }

    // Handle Page 2: Registration form submission
    if (registrationForm) {
        registrationForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const day = document.getElementById('day').value;
            const month = document.getElementById('month').value;
            const year = document.getElementById('year').value;
            const email = document.getElementById('email').value;
            
            const birthday = `${day}/${month}/${year}`;

            sessionStorage.setItem('name', name);
            sessionStorage.setItem('birthday', birthday);
            sessionStorage.setItem('email', email);

            window.location.href = 'check-loyalty.html'; // Redirect to check-loyalty.html
        });
    }

    // Handle Page 3: Display user information
    if (window.location.pathname.endsWith('check-loyalty.html')) {
        const name = sessionStorage.getItem('name');
        const birthday = sessionStorage.getItem('birthday');
        const email = sessionStorage.getItem('email');
        const phoneNumber = sessionStorage.getItem('phoneNumber');

        // Display the stored information on the check-loyalty.html page
        document.getElementById('display-phone').textContent = phoneNumber;
        document.getElementById('display-name').innerText = name;
        document.getElementById('display-birthday').innerText = birthday;
        document.getElementById('display-email').innerText = email;
    }
});
