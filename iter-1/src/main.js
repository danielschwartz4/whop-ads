import './style.css'

// Footer year
const yearEl = document.getElementById('year')
if (yearEl) yearEl.textContent = String(new Date().getFullYear())

// Fire a Whop pixel event when a visitor clicks a CTA toward the Whop signup.
// Links navigate normally if JS fails — this is enhancement only.
// Docs: https://docs.whop.com/developer/guides/pixel
document.querySelectorAll('.js-cta').forEach((el) => {
  el.addEventListener('click', () => {
    try {
      if (window.whop) {
        window.whop.track('custom', {
          name: 'cta_click_network',
          location: el.dataset.cta || 'unknown',
        })
      }
    } catch (e) {
      /* never block the click */
    }
  })
})

// Subtle reveal-on-scroll for elements with .reveal
const revealEls = document.querySelectorAll('.reveal')
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 }
  )
  revealEls.forEach((el) => io.observe(el))
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'))
}
