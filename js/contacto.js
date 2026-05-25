// ============================================
// CONTACTO MODULE
// ============================================
function initContacto() {
    // Form submission simulation
    window.submitForm = function() {
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();

        if (!nombre || !email) {
            alert('Por favor completa al menos tu nombre y email.');
            return;
        }

        const successMsg = document.getElementById('formSuccess');
        if (successMsg) {
            successMsg.classList.add('show');
        }

        // Clear fields
        document.getElementById('nombre').value = '';
        document.getElementById('empresa').value = '';
        document.getElementById('email').value = '';
        const tipoPlanta = document.getElementById('tipoPlanta');
        if (tipoPlanta) tipoPlanta.value = '';
        document.getElementById('mensaje').value = '';

        // Hide after 5 seconds
        setTimeout(() => {
            if (successMsg) {
                successMsg.classList.remove('show');
            }
        }, 5000);
    };
}