"use strict";

document.addEventListener("DOMContentLoaded", function() {
    let menuButton = document.getElementById("menu__btn");
    let menuDropdown = document.getElementById("menu__dropdown");

    menuButton.addEventListener("click", function() {
        menuDropdown.classList.toggle("show");
    });

    document.addEventListener("click", function(event) {
        if (!event.target.matches('#menu__btn') && !menuDropdown.contains(event.target)) {
            menuDropdown.classList.remove('show');
        }
    });

const modalEl = document.querySelector('.modal');
    const openEls = document.querySelectorAll('.card__link');
    const closeEl = document.querySelector('.close__btn');

    function closeModal() {
        modalEl.style.display = 'none';
    }


    openEls.forEach((openEl) => {
        openEl.addEventListener('click', () => {
            modalEl.style.display = 'block';
        });
    });


    closeEl.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modalEl) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modalEl.style.display === 'block') {
            closeModal();
        }
    });


    const emailEl = document.querySelector('.email');
    const email2El = document.querySelector('.email2');
    const formEl = document.getElementById('form');

    function isNotEmpty(value) {
        return value.trim() !== "";
    }

    function areEmailsEqual(email1, email2) {
        return email1 === email2;
    }

    function isValidEmail(email) {
        return email.includes('@') && email.indexOf('@') !== 0 && email.indexOf('@') !== email.length - 1;
    }
    

    function validateForm() {
        const emailValue = emailEl.value;
        const email2Value = email2El.value;

        let isValid = true;

        // Checking if email1 is empty
        if (!isNotEmpty(emailValue)) {
            isValid = false;
            emailEl.classList.add('error');
            document.getElementById('email-error').style.visibility = 'visible';
        } else {
            document.getElementById('email-error').style.visibility = 'hidden';
        }

        //Checking if email has '@'
        if (isNotEmpty(emailValue) && !isValidEmail(emailValue)) {
            isValid = false;
            emailEl.classList.add('error');
            document.getElementById('email-error2').style.visibility = 'visible';
        } else {
            document.getElementById('email-error2').style.visibility = 'hidden';
        }

        // Checking if email2 is empty or not equal to email1
        if (!isNotEmpty(email2Value) || !areEmailsEqual(emailValue, email2Value)) {
            isValid = false;
            email2El.classList.add('error');
            document.getElementById('email2-error').style.visibility = 'visible';
        } else {
            document.getElementById('email2-error').style.visibility = 'hidden';
        }

        return isValid;
    }

    formEl.addEventListener('submit', (e) => {
        if (!validateForm()) {
            e.preventDefault();
        }
    });

    function removeErrorClass(inputElement) {
        inputElement.classList.remove('error');
    }

    function handleInputValidation(inputElement) {
        const value = inputElement.value;
        if (isNotEmpty(value)) {
            removeErrorClass(inputElement);
            document.getElementById(inputElement.id + '-error').style.visibility = 'hidden';
        } else {
            inputElement.classList.add('error');
            document.getElementById(inputElement.id + '-error').style.visibility = 'visible';
            
        }
    }

    emailEl.addEventListener('input', (e) => {
        handleInputValidation(e.target);
    });

    email2El.addEventListener('input', (e) => {
        handleInputValidation(e.target);
    });

    [emailEl, email2El].forEach((input) => {
        input.addEventListener('blur', (e) => {
            handleInputValidation(e.target);
        });
    });
});


