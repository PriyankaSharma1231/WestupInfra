# Westup Infra — Official Website

**Westup Infra Private Limited**  
Utility-Scale Solar EPC Contractor · Barmer, Rajasthan  
CIN: U41001RJ2025PTC102845

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```
Output goes to the `/dist` folder — upload this to any hosting (Vercel, Netlify, etc.)

---

## Project Structure

```
westup-infra/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css                  ← Global styles & CSS variables
    └── components/
        ├── Navbar.jsx / .css
        ├── Hero.jsx / .css
        ├── Ticker.jsx / .css
        ├── About.jsx / .css
        ├── Services.jsx / .css
        ├── Projects.jsx / .css
        ├── WhyUs.jsx / .css
        ├── Contact.jsx / .css
        └── Footer.jsx / .css
```

---

## Customisation Checklist

### Must Update Before Launch
- [ ] **Phone number** — add to `Contact.jsx` contactDetails array
- [ ] **Real project names & MW** — update `Projects.jsx` projects array
- [ ] **Project photos** — import real JPG/PNG images in `Projects.jsx` (instructions in file)
- [ ] **Stats in Hero** — update the metrics array in `Hero.jsx` with real numbers

### Optional
- [ ] Add GST number to `Footer.jsx` and `About.jsx` once available
- [ ] Add ISO / CEA certifications to `WhyUs.jsx` certs array once obtained
- [ ] Connect the contact form to an email backend (EmailJS, Formspree, or custom API)

### Connecting the Contact Form
In `Contact.jsx`, find the `handleSubmit` function and replace the `console.log` with your preferred service:

**Option A — Formspree (easiest, free tier available):**
```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

**Option B — EmailJS:**
```js
import emailjs from '@emailjs/browser';
emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY');
```

---

## Deployment (Recommended: Vercel)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select the repo → Deploy
4. Your site is live at `https://your-project.vercel.app`

To use a custom domain (e.g. `westupinfra.in`), add it in Vercel → Settings → Domains.

---

## Tech Stack
- **React 18** — UI framework
- **Vite** — build tool (fast dev server + optimised builds)
- **Plain CSS** — per-component CSS files, no external UI library needed
- **Google Fonts** — Barlow Condensed + Barlow (loaded via CSS import)
