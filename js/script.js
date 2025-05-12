document.addEventListener('DOMContentLoaded', function() {
    // Control del menú de navegación móvil (hamburguesa)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });

    // Actualizar el año en el footer automáticamente
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Validación básica y manejo del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const phone = document.getElementById('phone').value.trim();

            if (name === '' || email === '' || message === '') {
                displayMessage('Por favor, completa todos los campos obligatorios (Nombre, Email, Mensaje).', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                displayMessage('Por favor, introduce un correo electrónico válido.', 'error');
                return;
            }

            console.log('Simulando envío de formulario...');
            console.log('Datos:', { name, email, phone, message });

            setTimeout(() => {
                displayMessage('¡Mensaje enviado con éxito! Te contactaremos pronto.', 'success');
                contactForm.reset();
            }, 1000);
        });
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function displayMessage(msg, type) {
        formMessage.textContent = msg;
        formMessage.className = `
