/* ===== SALLY SPA — index.js ===== */

/* ---- DATA ---- */
const services = [
  {
    icon: '🌿',
    title: 'Thai Massage',
    desc: 'Ancient healing art that harmonises the body through rhythmic pressure and assisted stretching. Deeply grounding and energising.',
    duration: '60 – 90 min'
  },
  {
    icon: '🌸',
    title: 'Aromatherapy Massage',
    desc: 'A sensory journey through botanical essential oils blended to calm the mind, restore the spirit, and soften every muscle.',
    duration: '60 – 90 min'
  },
  {
    icon: '🪨',
    title: 'Hot Stone Therapy',
    desc: 'Warm volcanic stones melt away deep tension as heat penetrates the muscles, releasing stress held in the body\'s core.',
    duration: '75 – 90 min'
  },
  {
    icon: '💆',
    title: 'Swedish Massage',
    desc: 'Classic full-body relaxation massage using long, flowing strokes to improve circulation and bring your nervous system to rest.',
    duration: '60 min'
  },
  {
    icon: '✨',
    title: 'Facials',
    desc: 'Customised facial treatments to cleanse, hydrate and illuminate your skin using natural, skin-loving ingredients.',
    duration: '45 – 60 min'
  },
  {
    icon: '🛁',
    title: 'Moroccan Bath',
    desc: 'A luxurious full-body ritual inspired by hammam tradition — exfoliate, purify and emerge with velvety, glowing skin.',
    duration: '60 min'
  },
  {
    icon: '💧',
    title: 'Hydrotherapy',
    desc: 'Water-based healing treatments that soothe muscles, improve circulation, and restore the body's natural balance.',
    duration: '45 min'
  },
  {
    icon: '🌬️',
    title: 'Steam Bath',
    desc: 'Purifying steam therapy that opens pores, detoxifies the body, and melts stress from the inside out.',
    duration: '30 min'
  },
  {
    icon: '💅',
    title: 'Pedicure & Manicure',
    desc: 'Meticulous nail and skin care that leaves your hands and feet pampered, polished, and completely at ease.',
    duration: '30 – 45 min'
  }
];

const packages = [
  {
    badge: 'Essentials',
    title: 'Renew',
    price: 'Ksh 3,500',
    note: 'per session',
    items: ['Swedish Massage (60 min)', 'Facial Treatment', 'Foot Soak'],
    featured: false
  },
  {
    badge: 'Most Popular',
    title: 'Restore',
    price: 'Ksh 6,000',
    note: 'grand offer',
    items: ['Full Body Massage', 'Body Scrub', 'Steam Bath', 'Moroccan Bath', 'Complimentary Tea'],
    featured: true
  },
  {
    badge: 'Luxury',
    title: 'Radiance',
    price: 'Ksh 9,500',
    note: 'full day retreat',
    items: ['Hot Stone Therapy', 'Aromatherapy Massage', 'Moroccan Bath', 'Facial', 'Manicure & Pedicure', 'Light Refreshments'],
    featured: false
  }
];

const testimonials = [
  {
    quote: "Sally Spa gave me the most profound rest I have ever experienced. I walked in tense and walked out feeling like myself again.",
    author: "Amara N. — Nairobi"
  },
  {
    quote: "The hot stone therapy here is unlike anything I've tried before. The therapists are incredibly skilled and the space is beautifully calming.",
    author: "David M. — Westlands"
  },
  {
    quote: "I booked the Restore package and it was worth every shilling. My skin, my body, my mind — all thanked me for it.",
    author: "Fatuma K. — Kilimani"
  },
  {
    quote: "From the moment I stepped in, I felt held and cared for. Sally Spa is now my monthly ritual.",
    author: "Grace O. — Karen"
  }
];

/* ---- RENDER SERVICES ---- */
function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  grid.innerHTML = services.map((s, i) => `
    <div class="service-card reveal" style="transition-delay: ${i * 0.08}s">
      <div class="service-icon">${s.icon}</div>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.desc}</p>
      <p class="service-duration">⏱ ${s.duration}</p>
    </div>
  `).join('');
}

/* ---- RENDER PACKAGES ---- */
function renderPackages() {
  const grid = document.getElementById('packages-grid');
  if (!grid) return;
  grid.innerHTML = packages.map((p, i) => `
    <div class="package-card ${p.featured ? 'featured' : ''} reveal" style="transition-delay: ${i * 0.12}s">
      <span class="package-badge">${p.badge}</span>
      <h3 class="package-title">${p.title}</h3>
      <p class="package-price">${p.price}</p>
      <p class="package-price-note">${p.note}</p>
      <ul class="package-list">
        ${p.items.map(item => `<li class="package-list-item">${item}</li>`).join('')}
      </ul>
      <a href="#booking" class="package-btn">Book This Package</a>
    </div>
  `).join('');
}

/* ---- TESTIMONIALS CAROUSEL ---- */
let currentTestimonial = 0;
let testimonialInterval;

function renderTestimonialDots() {
  const dotsEl = document.getElementById('testimonial-dots');
  if (!dotsEl) return;
  dotsEl.innerHTML = testimonials.map((_, i) => `
    <button class="testimonial-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Testimonial ${i + 1}"></button>
  `).join('');
  dotsEl.querySelectorAll('.testimonial-dot').forEach(btn => {
    btn.addEventListener('click', () => {
      goToTestimonial(parseInt(btn.dataset.index));
      resetTestimonialInterval();
    });
  });
}

function goToTestimonial(index) {
  currentTestimonial = index;
  const textEl = document.querySelector('.testimonial-text');
  const authorEl = document.querySelector('.testimonial-author');
  if (!textEl || !authorEl) return;

  textEl.style.opacity = '0';
  textEl.style.transform = 'translateY(10px)';
  setTimeout(() => {
    textEl.textContent = `"${testimonials[index].quote}"`;
    authorEl.textContent = `— ${testimonials[index].author}`;
    textEl.style.opacity = '1';
    textEl.style.transform = 'translateY(0)';
  }, 300);

  document.querySelectorAll('.testimonial-dot').forEach((d, i) => {
    d.classList.toggle('active', i === index);
  });
}

function nextTestimonial() {
  goToTestimonial((currentTestimonial + 1) % testimonials.length);
}

function resetTestimonialInterval() {
  clearInterval(testimonialInterval);
  testimonialInterval = setInterval(nextTestimonial, 5000);
}

function initTestimonials() {
  renderTestimonialDots();
  const textEl = document.querySelector('.testimonial-text');
  const authorEl = document.querySelector('.testimonial-author');
  if (textEl) textEl.textContent = `"${testimonials[0].quote}"`;
  if (authorEl) authorEl.textContent = `— ${testimonials[0].author}`;
  if (textEl) {
    textEl.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  }
  testimonialInterval = setInterval(nextTestimonial, 5000);
}

/* ---- SCROLL REVEAL ---- */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ---- NAVBAR SCROLL ---- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ---- MOBILE MENU ---- */
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  // Close on link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => menu.classList.add('hidden'));
  });
}

/* ---- BOOKING FORM ---- */
function initBookingForm() {
  const btn = document.getElementById('submit-btn');
  const success = document.getElementById('form-success');
  if (!btn) return;

  btn.addEventListener('click', () => {
    // Simple validation
    const inputs = document.querySelectorAll('#booking-form input, #booking-form select');
    let allFilled = true;
    inputs.forEach(input => {
      if (!input.value.trim()) {
        allFilled = false;
        input.style.borderColor = '#C87941';
        setTimeout(() => input.style.borderColor = '', 2500);
      }
    });

    if (!allFilled) {
      btn.textContent = 'Please fill in all fields';
      setTimeout(() => btn.textContent = 'Request Appointment', 2500);
      return;
    }

    btn.textContent = 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      btn.style.display = 'none';
      if (success) success.classList.remove('hidden');
      // Reset after delay
      setTimeout(() => {
        btn.style.display = '';
        btn.textContent = 'Request Appointment';
        btn.disabled = false;
        success.classList.add('hidden');
        document.querySelectorAll('#booking-form input, #booking-form select, #booking-form textarea').forEach(el => el.value = '');
      }, 5000);
    }, 1200);
  });
}

/* ---- SMOOTH ANCHOR SCROLL ---- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = document.getElementById('navbar')?.offsetHeight || 80;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ---- INIT ---- */
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderPackages();

  // Re-observe after dynamic render
  requestAnimationFrame(() => {
    initScrollReveal();
    initTestimonials();
  });

  initNavbar();
  initMobileMenu();
  initBookingForm();
  initSmoothScroll();
});