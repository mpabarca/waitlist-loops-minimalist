# waitlist-loops-base-template

The fastest way to launch a waitlist landing page.  
Built with [Vite](https://vitejs.dev/), [React](https://react.dev/), and [TailwindCSS](https://tailwindcss.com/).

> ⚡️ Minimal, responsive, production-ready.  
> 📬 Integrated with [Loops.so](https://loops.so) for email collection.  
> 🚀 Deployable to Vercel, Netlify, or GitHub Pages in minutes.

---

## 🧱 Features

- Minimal, responsive layout
- Customisable title, subtitle, CTA, and logo
- Clean project structure using alias imports
- `.env`-based Loops.so integration
- No backend, no clutter — just plug and launch

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone git@github.com:your-org/waitlist-base-template.git

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# → Add your Loops.so Form ID

# 4. Start the dev server
npm run dev
```

---

## 🛠 Configuration

| Setting        | Location               | Description                                 |
|----------------|------------------------|---------------------------------------------|
| `VITE_LOOPS_FORM_ID` | `.env`                | Your [Loops.so](https://loops.so) Form ID for email collection |
| Headline, Text, CTA | `src/pages/LandingPage.tsx` | Update site copy, links, and visual content |
| Logo & Images  | `public/` or `src/assets/` | Replace logo or hero visuals                |
| Global Styles  | `src/styles/global.css` | Tailwind base styles and resets             |
| Tailwind Config| `tailwind.config.js`    | Add custom colours, fonts, or spacing       |
| Meta & SEO     | `index.html`            | Update title, favicon, and meta tags        |

---

## 🧠 Use Cases

This template is perfect for:

- 🚀 Pre-launch waitlists for new products
- 🧪 Validating SaaS ideas or MVPs
- 🛠 Indie hacker and solo dev projects
- 🤖 AI tools or micro-SaaS utilities
- 📩 Quick landing pages for email capture
- 🧘‍♀️ No-code backend experiments

---

## 📦 Folder Structure

```bash
  waitlist-base-template/
  ├── public/              # Static assets (e.g. logo, favicon)
  ├── src/
  │   ├── assets/          # Custom image or icon assets
  │   ├── components/      # UI components (e.g. LoopsForm)
  │   ├── pages/           # Main page layout (LandingPage)
  │   ├── styles/          # Tailwind + global styles
  │   └── main.tsx         # Vite app entry point
  ├── .env.example         # Sample environment config
  ├── index.html           # Main HTML template
  ├── tailwind.config.js   # Tailwind custom config
  ├── vite.config.ts       # Vite config
  └── README.md
```

---

## 🚀 Deployment

This template is ready to deploy to platforms like:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

---

## 🪪 License

MIT © 2025 Maria Paz Abarca
</br>
Let me know if you’d like to add badges, screenshots, or a theme switcher note for the CLI-based version later.
