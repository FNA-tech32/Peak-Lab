# Peak Lab

Peak Lab is a website for fitness coaches who want a weekly check-in from their first clients. Each client gets one personal link. The coach sees everyone on a single page, marked with a traffic light: act, watch, new, or steady.

The public site and the demo run in the browser with [Vite](https://vitejs.dev/) and React. Sample check-ins stay on the device. There is no coach login and no database in this project.

## Pages

- **Home** (`/`) — what Peak Lab does, how the traffic light works, and a slider you can try
- **Demo** (`/demo`) — coach overview with sample clients
- **Check-in** (`/demo/checkin`) — the client form; your answers show up in the overview as “Du”
- **Clients** (`/demo/kunden`) — the client list in the demo
- **Welcome** (`/demo/willkommen`) — short introduction for a new coach
- **Client detail** (`/demo/kunde/:id`) — one client’s week and history
- **Contact** (`/login`) — how to reach Peak Lab
- **Privacy** (`/datenschutz`) and **processing note** (`/avv`)

The line on the home page is “Wer braucht dich diese Woche?”

## Contact

| | |
| --- | --- |
| **Name** | Peak Lab |
| **Email** | [hello@peaklab.com](mailto:hello@peaklab.com) |

Email, and any later phone or address, live in `src/lib/rechtstexte.ts`. The home footer, the contact page, and the privacy page all read that file.

## Requirements

- Node.js 18 or newer
- npm

## Getting started

```sh
npm install
npm run dev
```

The dev server runs at [http://localhost:5173](http://localhost:5173).

## Production build

```sh
npm run build
npm run preview
```

`npm run build` writes the site to `dist/`.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Starts the Vite dev server |
| `npm run build` | Creates the production build in `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm test` | Runs the traffic-light, week, overview, CSV, and WhatsApp tests |

## Stack

- Vite
- React
- React Router
- Tailwind CSS
- TypeScript
- Vitest

## Project structure

```
index.html                 Vite entry
src/main.tsx               React entry
src/App.tsx                Routes and shared footer
src/app/page.tsx           Home
src/app/demo               Demo pages
src/lib/rechtstexte.ts     Brand name and contact email
src/lib/ampel.ts           Traffic-light rules
```

## License

MIT. See [LICENSE](LICENSE).
