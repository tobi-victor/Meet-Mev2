/* ============================================
   Victor Adedeji — Portfolio Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile Nav Toggle ---------- */
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('active');
      });
    });
  }

  /* ---------- Navbar Scroll Effect ---------- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* ---------- Scroll-to-Top Button ---------- */
  const scrollTopBtn = document.getElementById('scroll-top');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Experience Accordion Toggler ---------- */
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
      const item = this.parentElement;
      const isOpen = item.classList.contains('active');

      // Close all other items for clean single accordion state
      document.querySelectorAll('.accordion-item').forEach(function (el) {
        el.classList.remove('active');
        const h = el.querySelector('.accordion-header');
        if (h) h.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('active');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---------- Fade-in on Scroll (Intersection Observer) ---------- */
  const fadeElements = document.querySelectorAll('.fade-in');
  var observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(function (el) {
    observer.observe(el);
  });

  /* ---------- Typed.js ---------- */
  if (document.getElementById('typed-output')) {
    new Typed('#typed-output', {
      strings: [
        'AI Backend Engineer',
        'Software Engineer',
        'Mathematical Scientist',
        'Research Fellow - Multimodal AI'
      ],
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }

  /* ---------- Contact Form ---------- */
  var contactForm = document.getElementById('contact-form');
  var messageDiv = document.getElementById('form-message');
  var submitBtn = document.getElementById('submit');

  if (contactForm) {
    contactForm.addEventListener('submit', async function (event) {
      event.preventDefault();

      // Disable button and show loading
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
      };

      try {
        var response = await fetch('https://encouraging-odette-meet-me-5ef0ef37.koyeb.app/send-message', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        var result = await response.json();

        if (response.ok) {
          messageDiv.textContent = 'Thank you! Your message has been sent successfully.';
          messageDiv.style.display = 'block';
          messageDiv.style.backgroundColor = '#dcfce7';
          messageDiv.style.color = '#166534';
          contactForm.reset();
        } else {
          messageDiv.textContent = 'Error: ' + (result.detail || 'Something went wrong');
          messageDiv.style.display = 'block';
          messageDiv.style.backgroundColor = '#fee2e2';
          messageDiv.style.color = '#991b1b';
        }
      } catch (error) {
        messageDiv.textContent = 'Sorry, there was an error sending your message. Please try again later.';
        messageDiv.style.display = 'block';
        messageDiv.style.backgroundColor = '#fee2e2';
        messageDiv.style.color = '#991b1b';
        console.error('Form submission error:', error);
      } finally {
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;

        setTimeout(function () {
          messageDiv.style.display = 'none';
        }, 5000);
      }
    });
  }

  /* ---------- Smooth Scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = 80; // navbar height
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

});
