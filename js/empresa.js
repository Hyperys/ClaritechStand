// ============================================
// EMPRESA MODULE
// ============================================
function initEmpresa() {
    // La función switchTab se expone globalmente para que los onclick en HTML funcionen
    window.switchTab = function(tabName) {
        // Remove active from all buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        // Add active to clicked button (event.target)
        // Como se llama desde onclick, podemos obtener el botón por contexto
        const activeBtn = document.querySelector(`.tab-btn[onclick="switchTab('${tabName}')"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }

        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        // Show target content
        const targetContent = document.getElementById('tab-' + tabName);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    };
}