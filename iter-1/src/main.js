import './style.css'

// Footer year
const yearEl = document.getElementById('year')
if (yearEl) yearEl.textContent = String(new Date().getFullYear())

// Fire a Whop pixel event when a visitor clicks a CTA toward the Whop signup.
// The CTA is a top-level navigation away from this page, so we briefly defer
// same-tab navigation to give the pixel beacon time to flush before unload.
// Links still work with no JS (progressive enhancement).
// Docs: https://docs.whop.com/developer/guides/pixel
document.querySelectorAll('.js-cta').forEach((el) => {
  el.addEventListener('click', (e) => {
    try {
      if (window.whop) {
        window.whop.track('custom', {
          name: 'cta_click_network',
          location: el.dataset.cta || 'unknown',
        })
      }
    } catch (_) {
      /* never block the click */
    }

    // Modified / new-tab clicks keep this page open, so the beacon sends fine —
    // don't hijack those.
    const href = el.getAttribute('href')
    const opensElsewhere =
      el.target === '_blank' ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    if (!href || opensElsewhere) return

    // Same-tab navigation: let the beacon flush (~250ms), then go.
    e.preventDefault()
    setTimeout(() => {
      window.location.href = href
    }, 250)
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
