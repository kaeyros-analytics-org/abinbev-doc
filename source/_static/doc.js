// Premium Food Documentation — Enhanced JavaScript
// Simple but effective interactions

document.addEventListener('DOMContentLoaded', function() {
  
  // =============================================================
  // MOBILE SIDEBAR TOGGLE
  // =============================================================
  const toggleBtn = document.getElementById('toggleBtn');
  const sidebar = document.getElementById('sidebar');
  
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', function() {
      sidebar.classList.toggle('shift');
    });
    
    // Close sidebar when clicking outside (mobile)
    document.addEventListener('click', function(e) {
      if (window.innerWidth <= 768 && !sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
        sidebar.classList.remove('shift');
      }
    });
  }
  
  // =============================================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // =============================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // =============================================================
  // AMÉLIORATIONS UX SUPPLÉMENTAIRES
  // =============================================================
  
  // Ajouter des tooltips pour les liens longs
  document.querySelectorAll('.wy-menu-vertical a').forEach(link => {
    if (link.scrollWidth > link.clientWidth) {
      link.title = link.textContent.trim();
    }
  });
  
  // Gérer le redimensionnement de la fenêtre pour le responsive
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      updateActiveNavigation();
    }, 250);
  });

});
