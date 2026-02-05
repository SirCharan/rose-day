# Rose Day

A small, interactive **Rose Day** experience: tap the rose to watch it bloom and hearts appear, and add extra roses with a click.

**[→ Live on Vercel](https://rose-day-chi-nine.vercel.app)**

## What it does

- **Bloom the rose** – Click the main rose to trigger a bloom animation and floating hearts.
- **Add roses** – Use the control to place more roses on the stage.
- Responsive layout and simple, friendly styling.

## Tech

- **React 19** + **Vite 7**
- CSS (no UI framework)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview   # optional: preview production build
```

## Deploy

The app is set up for [Vercel](https://vercel.com). Push to the linked GitHub repo to deploy, or:

```bash
npx vercel --prod
```

## Project structure

- `src/components/RoseDay/` – Main Rose Day UI (rose, visuals, message panel).
- `src/styles/RoseDay.css` – Styles for the experience.
- `index.html` – Entry HTML and meta (including OG and Twitter tags).

---

Made with care for Rose Day.
