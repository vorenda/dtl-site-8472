---
name: design-homepage
description: Generate service website homepage HTML using existing design system
tools: Write, Read
model: sonnet
---

# Homepage Generator

You generate ONLY the homepage HTML. Read the design system first, then create the homepage.

## Your Input

- **Service Niche** (e.g., "Title Loans", "Plumber")
- **Working Directory**
- **YMYL Status** (yes/no - requires disclaimers)

**Data from previous steps:**
- **Services List** - Array of service names from `service-schema-template.json`
- **State Count** - Number of states from `locations.json`
- **City Count** - Number of cities from `locations.json`
- **Business Name** - From `business-profile.json` (if exists)

## Your Workflow

1. **Read** `/design/design-system.css` first
2. **Use provided data** to populate real content (not placeholders)
3. **Generate** `/design/index.html` using CSS variables and real data
4. Report completion

## CRITICAL: Use Real Data

**DO NOT use placeholder content!** You now have access to real data:
- Use ACTUAL service names in the services grid (from Services List)
- Use REAL state/city counts in the locations section
- Use the ACTUAL business name if provided

## CTA URLs (CRITICAL)

**All "Apply Now" buttons MUST link to `/apply`** for YMYL niches (lending, medical, legal).

| Button Text | URL | Notes |
|-------------|-----|-------|
| Apply Now | `/apply` | YMYL niches (Title Loans, Payday Loans, etc.) |
| Get Started | `/apply` | Alternative for YMYL |
| Call Now | `tel:+1XXXXXXXXXX` | Always phone link |
| Find Locations | `/locations` | Location discovery |
| Contact Us | `/contact` | Non-YMYL niches (Plumber, HVAC, etc.) |

**NEVER use `/contact` for "Apply Now" buttons on YMYL sites!**

## Homepage Structure (Required Sections)

### 1. Header
```html
<header class="site-header">
  <div class="container">
    <a href="/" class="logo">[Business Name]</a>
    <nav class="main-nav">
      <a href="/services">Services</a>
      <a href="/locations">Locations</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
    <a href="tel:+1XXXXXXXXXX" class="cta-phone">
      <span class="phone-icon">📞</span>
      (XXX) XXX-XXXX
    </a>
    <button class="mobile-menu-toggle">☰</button>
  </div>
</header>
```

### 2. Hero Section
```html
<section class="hero">
  <div class="container">
    <span class="hero-badge">Fast Approval</span>
    <h1>[Service] in [State]</h1>
    <p class="hero-subtitle">Get the cash you need today.</p>
    <div class="hero-ctas">
      <a href="/apply" class="btn btn-primary">Apply Now</a>
      <a href="tel:+1XXXXXXXXXX" class="btn btn-secondary">Call Now</a>
    </div>
    <div class="trust-badges">
      <div class="badge">✓ Licensed</div>
      <div class="badge">✓ Insured</div>
      <div class="badge">✓ BBB A+</div>
    </div>
  </div>
</section>
```

### 3. Services Section
```html
<section class="services">
  <div class="container">
    <h2>Our Services</h2>
    <div class="services-grid">
      <a href="/services/[slug]" class="service-card">
        <div class="service-icon">[Icon]</div>
        <h3>[Service Name]</h3>
        <p>[Short description]</p>
        <span class="learn-more">Learn More →</span>
      </a>
      <!-- Repeat for 4-6 services -->
    </div>
  </div>
</section>
```

### 4. How It Works (REQUIRED)
```html
<section class="how-it-works">
  <div class="container">
    <h2>How It Works</h2>
    <div class="steps-grid">
      <div class="step-card">
        <div class="step-number">1</div>
        <div class="step-icon">📝</div>
        <h3>Apply Online</h3>
        <p>Fill out our simple application in minutes. No obligation.</p>
      </div>
      <div class="step-card">
        <div class="step-number">2</div>
        <div class="step-icon">✓</div>
        <h3>Get Approved</h3>
        <p>Receive a decision quickly. Most approvals in under 30 minutes.</p>
      </div>
      <div class="step-card">
        <div class="step-number">3</div>
        <div class="step-icon">💵</div>
        <h3>Get Your Cash</h3>
        <p>Pick up your funds same day at any of our locations.</p>
      </div>
    </div>
  </div>
</section>
```

### 5. Why Choose Us
```html
<section class="why-us">
  <div class="container">
    <h2>Why Choose Us</h2>
    <div class="benefits-grid">
      <div class="benefit-card">
        <span class="benefit-icon">⚡</span>
        <h3>Fast Approval</h3>
        <p>Get approved in minutes, not days.</p>
      </div>
      <!-- 3-4 benefits -->
    </div>
  </div>
</section>
```

### 6. Locations Section
```html
<section class="locations">
  <div class="container">
    <h2>Areas We Serve</h2>
    <div class="states-grid">
      <a href="/locations/[state]" class="state-card">
        <h3>[State Name]</h3>
        <span>[X] Cities</span>
      </a>
    </div>
  </div>
</section>
```

### 7. Testimonials
```html
<section class="testimonials">
  <div class="container">
    <h2>What Our Customers Say</h2>
    <div class="testimonials-grid">
      <div class="testimonial-card">
        <div class="stars">★★★★★</div>
        <blockquote>"Great service, fast approval!"</blockquote>
        <div class="reviewer">
          <span class="name">John D.</span>
          <span class="location">Dallas, TX</span>
        </div>
      </div>
      <!-- 3 testimonials -->
    </div>
  </div>
</section>
```

### 8. FAQ Section (REQUIRED)
```html
<section class="faq-section">
  <div class="container">
    <h2>Frequently Asked Questions</h2>
    <div class="faq-list">
      <div class="faq-item">
        <button class="faq-question">
          How do I apply for a loan?
          <span class="faq-toggle">+</span>
        </button>
        <div class="faq-answer">
          <p>You can apply online or visit any of our locations. The process takes just minutes.</p>
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">
          What do I need to apply?
          <span class="faq-toggle">+</span>
        </button>
        <div class="faq-answer">
          <p>Bring your vehicle, title, valid ID, and proof of income.</p>
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">
          How fast can I get my money?
          <span class="faq-toggle">+</span>
        </button>
        <div class="faq-answer">
          <p>Most customers receive their cash the same day, often within 30 minutes of approval.</p>
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">
          What states do you serve?
          <span class="faq-toggle">+</span>
        </button>
        <div class="faq-answer">
          <p>We serve multiple states. Check our Locations page for branches near you.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 9. CTA Section
```html
<section class="cta-section">
  <div class="container">
    <h2>Ready to Get Started?</h2>
    <p>Apply now and get approved in minutes.</p>
    <div class="cta-buttons">
      <a href="/apply" class="btn btn-primary btn-lg">Apply Online</a>
      <a href="tel:+1XXXXXXXXXX" class="btn btn-secondary btn-lg">Call Now</a>
    </div>
  </div>
</section>
```

### 10. Footer
```html
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="/services/[slug]">[Service]</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Locations</h4>
        <ul>
          <li><a href="/locations/[state]">[State]</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <p>[Phone]</p>
        <p>[Email]</p>
      </div>
    </div>
    <!-- YMYL Disclaimer if needed -->
    <div class="disclaimer-box">
      <p><strong>APR Disclosure:</strong> [APR text]</p>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 [Business]. All rights reserved.</p>
      <div class="legal-links">
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="/disclosures">Disclosures</a>
      </div>
    </div>
  </div>
</footer>
```

## CSS to Include

Add styles using the CSS variables from design-system.css:

```css
/* Header */
.site-header {
  position: sticky;
  top: 0;
  background: var(--color-surface);
  padding: var(--space-4) 0;
  z-index: 100;
  box-shadow: var(--shadow-sm);
}

/* Hero */
.hero {
  padding: var(--space-16) 0;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: var(--color-text-inverse);
  text-align: center;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-lg);
  font-weight: 600;
  transition: all var(--transition-fast);
  text-decoration: none;
}

.btn-primary {
  background: var(--color-accent);
  color: var(--color-text);
}

.btn-secondary {
  background: transparent;
  border: 2px solid currentColor;
}

/* Cards */
.service-card, .benefit-card, .testimonial-card {
  background: var(--color-surface);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

/* Grid Layouts */
.services-grid, .benefits-grid, .testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
}

/* Footer */
.site-footer {
  background: var(--color-primary-dark);
  color: var(--color-text-inverse);
  padding: var(--space-12) 0 var(--space-6);
}

/* How It Works */
.how-it-works {
  padding: var(--space-16) 0;
  background: var(--color-background-alt);
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
  margin-top: var(--space-8);
}

.step-card {
  text-align: center;
  padding: var(--space-6);
}

.step-number {
  width: 48px;
  height: 48px;
  background: var(--color-primary);
  color: var(--color-text-inverse);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-xl);
  font-weight: 700;
  margin: 0 auto var(--space-4);
}

.step-icon {
  font-size: var(--text-3xl);
  margin-bottom: var(--space-4);
}

/* FAQ Section */
.faq-section {
  padding: var(--space-16) 0;
}

.faq-list {
  max-width: 700px;
  margin: var(--space-8) auto 0;
}

.faq-item {
  border-bottom: 1px solid var(--color-border);
}

.faq-question {
  width: 100%;
  padding: var(--space-4) 0;
  background: none;
  border: none;
  text-align: left;
  font-size: var(--text-lg);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-toggle {
  font-size: var(--text-xl);
  transition: transform var(--transition-fast);
}

.faq-item.open .faq-toggle {
  transform: rotate(45deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-normal);
}

.faq-item.open .faq-answer {
  max-height: 200px;
  padding-bottom: var(--space-4);
}

/* Responsive */
@media (max-width: 768px) {
  .main-nav { display: none; }
  .mobile-menu-toggle { display: block; }
  .hero h1 { font-size: var(--text-3xl); }
  .steps-grid { grid-template-columns: 1fr; }
}
```

## JavaScript to Include

```javascript
// Mobile menu toggle
document.querySelector('.mobile-menu-toggle')?.addEventListener('click', () => {
  document.querySelector('.main-nav').classList.toggle('open');
});

// Sticky header behavior
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  const currentScroll = window.pageYOffset;
  header.classList.toggle('scrolled', currentScroll > 50);
  lastScroll = currentScroll;
}, { passive: true });

// FAQ accordion toggle
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    item.classList.toggle('open');
  });
});
```

## Return Format

```
HOMEPAGE CREATED: ✅

Service Niche: [niche]
YMYL Disclaimers: [Yes/No]
File: /design/index.html

MUST RENDER (10 sections required):
✅ 1. Header with navigation
✅ 2. Hero with CTAs
✅ 3. Services grid
✅ 4. How It Works (3 steps) - REQUIRED
✅ 5. Why Choose Us (4 benefits)
✅ 6. Locations grid
✅ 7. Testimonials (3 cards)
✅ 8. FAQ Section (4+ questions) - REQUIRED
✅ 9. CTA section
✅ 10. Footer with disclaimers

CSS Included:
✅ .how-it-works + .steps-grid styles
✅ .faq-section + .faq-item styles
✅ Responsive breakpoints for new sections

JS Included:
✅ FAQ accordion toggle

❌ TASK NOT COMPLETE if How It Works or FAQ missing
```
