# 💒 Indian Wedding Invitation – React App

## Stack
- **React 18** + **Vite**
- CSS Modules for scoped styling
- No external animation libraries (pure CSS + Canvas API)

## Setup

```bash
cd wedding-invite
npm install
npm run dev
```

Open http://localhost:5173

## Deploy to Netlify (free link)
```bash
npm run build
# drag the dist/ folder to https://app.netlify.com/drop
```

## Project Structure
```
src/
├── App.jsx
├── main.jsx
├── styles/global.css
├── hooks/
│   ├── useScrollAnimation.js
│   └── useCountdown.js
└── components/
    ├── WelcomeOverlay.jsx / .module.css
    ├── PetalCanvas.jsx
    ├── ScrollProgress.jsx
    ├── Hero.jsx / .module.css
    ├── About.jsx / .module.css
    ├── Events.jsx / .module.css
    ├── Countdown.jsx / .module.css
    ├── Venue.jsx / .module.css
    ├── Gallery.jsx / .module.css
    ├── RSVP.jsx / .module.css
    └── Footer.jsx / .module.css
```

## Customise
- Names/date → `Hero.jsx` and `Footer.jsx`
- Countdown target → `App.jsx` weddingDate prop
- Venue/Events → `Events.jsx` and `Venue.jsx` data arrays
- Gallery photos → replace emojis with `<img>` in `Gallery.jsx`
- Colors → `src/styles/global.css` `:root` variables
