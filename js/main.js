// ============================================
// MAIN ORCHESTRATOR
// ============================================
async function loadComponent(mountId, filePath) {
    const res = await fetch(filePath);
    if (!res.ok) {
        console.error(`Error loading ${filePath}: ${res.status}`);
        return;
    }
    const html = await res.text();
    document.getElementById(mountId).innerHTML = html;
}

async function init() {
    // Cargar todos los componentes HTML en paralelo
    await Promise.all([
        loadComponent('navbar-mount',     'components/navbar.html'),
        loadComponent('hero-mount',       'components/hero.html'),
        loadComponent('soluciones-mount', 'components/soluciones.html'),
        loadComponent('tecnologia-mount', 'components/tecnologia.html'),
        loadComponent('empresa-mount',    'components/empresa.html'),
        loadComponent('recursos-mount',   'components/recursos.html'),
        loadComponent('contacto-mount',   'components/contacto.html'),
        loadComponent('footer-mount',     'components/footer.html'),
    ]);

    // Inicializar módulos después de que el DOM esté listo
    if (typeof initNavbar === 'function') initNavbar();
    if (typeof initEmpresa === 'function') initEmpresa();
    if (typeof initContacto === 'function') initContacto();
}

document.addEventListener('DOMContentLoaded', init);