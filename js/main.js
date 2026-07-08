/* ============================================================
   Jade Eyraud — one-page CV interactions
   ============================================================ */
(function () {
  'use strict';

  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  var navAnchors = Array.prototype.slice.call(links.querySelectorAll('a[href^="#"]'));
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Nav background on scroll --- */
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 24);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* --- Mobile menu --- */
  function closeMenu() {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navAnchors.forEach(function (a) { a.addEventListener('click', closeMenu); });
  links.querySelector('.nav__cv').addEventListener('click', closeMenu);

  /* --- Scroll reveal --- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('in'); });
    fillLangBars();
  } else {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { revealObs.observe(el); });
  }

  /* --- Language bars fill when skills section enters view --- */
  function fillLangBars() {
    document.querySelectorAll('.lang-bar i').forEach(function (bar) {
      bar.style.width = (bar.getAttribute('data-level') || 0) + '%';
    });
  }
  var skills = document.getElementById('skills');
  if (skills && 'IntersectionObserver' in window && !reduceMotion) {
    var barObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { fillLangBars(); barObs.disconnect(); }
      });
    }, { threshold: 0.3 });
    barObs.observe(skills);
  }

  /* --- Active nav link via section observation --- */
  var sections = navAnchors
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var spyObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var id = e.target.id;
          navAnchors.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { spyObs.observe(s); });
  }

  /* --- Footer year --- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
