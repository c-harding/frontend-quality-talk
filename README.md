# Frontend Quality (Slide Deck)

Slide deck for a guest lecture at TH Rosenheim in the course **SQS (Software Qualitaetssicherung)**.

The talk focuses on practical frontend quality topics for student project work, including:

- TypeScript
- Linting and formatting
- Architecture and maintainability
- Accessibility
- Design systems
- Hands-on exercise (“Fix the Frontend”)

## Tech Stack

- [Slidev](https://sli.dev/)
- QAware Slidev theme (`@qaware-internal/slidev-theme-qaware`)
- [`slidev-addon-timing-bar`](https://github.com/c-harding/slidev-addon-timing-bar)

## Repository Structure

- `slides.md` - main deck entry, chapter wiring
- `pages/01-motivation.md` ... `pages/08-uebung.md` - chapter slides
- `components/` - custom Vue components used in slides
- `styles/` - shared slide styling

## Run Locally

```bash
pnpm install
pnpm dev
```

Then open:

- <http://localhost:3030>

## Build

```bash
pnpm build
```
