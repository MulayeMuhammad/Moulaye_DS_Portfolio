/* ================================================================
   MOULAYE AHMED PORTFOLIO — Main JavaScript
   ================================================================ */

(function () {
  'use strict';

  /* ---- Navbar scroll ---- */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- Mobile menu ---- */
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
    // close on link click
    navLinks.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
      })
    );
  }

  /* ---- Smooth scroll ---- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ---- Active nav link on scroll ---- */
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a[href^="#"]');
  if (sections.length && navItems.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navItems.forEach(a => a.classList.remove('active'));
          const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(s => observer.observe(s));
  }

  /* ---- Typewriter effect ---- */
  const typeEl = document.getElementById('typewriter');
  if (typeEl) {
    const roles = [
      'Data & AI Engineer',
      'Statistician Economist'
    ];
    let ri = 0, ci = 0, deleting = false;
    function type() {
      const cur = roles[ri];
      typeEl.textContent = deleting ? cur.slice(0, --ci) : cur.slice(0, ++ci);
      let wait = deleting ? 55 : 95;
      if (!deleting && ci === cur.length) { wait = 2200; deleting = true; }
      else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % roles.length; wait = 350; }
      setTimeout(type, wait);
    }
    setTimeout(type, 600);
  }

  /* ---- Intersection Observer: fade-up ---- */
  const fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length) {
    const fo = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); fo.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    fadeEls.forEach(el => fo.observe(el));
  }

  /* ---- Timeline items ---- */
  const tlItems = document.querySelectorAll('.tl-item');
  if (tlItems.length) {
    const to = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          to.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    tlItems.forEach(el => to.observe(el));
  }

  /* ---- Animated counters ---- */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const co = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el  = e.target;
          const end = parseInt(el.dataset.count, 10);
          const sfx = el.dataset.suffix || '';
          let cur = 0;
          const step = Math.ceil(end / 60);
          const timer = setInterval(() => {
            cur = Math.min(cur + step, end);
            el.textContent = cur + sfx;
            if (cur >= end) clearInterval(timer);
          }, 25);
          co.unobserve(el);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(el => co.observe(el));
  }

  /* ---- Experience tabs ---- */
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById(btn.dataset.tab);
      if (panel) panel.classList.add('active');
    });
  });

  /* ---- Project filters ---- */
  document.querySelectorAll('.f-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.proj-card').forEach(card => {
        card.classList.toggle('hidden', filter !== 'all' && card.dataset.cat !== filter);
      });
    });
  });

  /* ---- Back to top on project pages ---- */
  const backBtn = document.querySelector('.back-btn');
  if (backBtn && backBtn.getAttribute('href') === '#back') {
    backBtn.addEventListener('click', e => { e.preventDefault(); history.back(); });
  }

})();
