    setTimeout(() => {
      const preload = document.getElementById('preload');
      preload.classList.add('loaded'); // Add the loaded class
      // Optionally, hide the preloader completely after transition
      setTimeout(() => {
        preload.style.display = 'none'; 
        document.querySelector('.header, .about, .contact-container, .content').classList.add('.header, .about, .contact-container, .content');// Hide after fade-out
      }, 500); // Duration of the fade-out transition
    }, 900); // Hide preloader after 5 seconds
