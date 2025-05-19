/* js/main.js */
// Smooth scroll reveal for future use
function onEntry(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }
  const options = { threshold: [0.1] };
  const observer = new IntersectionObserver(onEntry, options);
  document.querySelectorAll('.slide-in').forEach(el => observer.observe(el));
  // Redirect from "Not sure?" button
  const notSureBtn = document.getElementById('not-sure');
  if (notSureBtn) notSureBtn.addEventListener('click', () => window.location.href = 'assessment.html');
  function nextStep() { /* placeholder for step logic */ }
  