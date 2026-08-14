# Built by Frank

Marketing and client-work site for an independent web development practice based in
Philadelphia, PA. Single-page React application with a design-token system,
component-scoped styling, and a serverless contact pipeline.

**Live:** [builtbyfrank.com](https://builtbyfrank.com)

## Overview

The site is a single-page application composed of seven content sections mounted
under a persistent navigation shell. Rather than reaching for a component library,
every element — layout, cards, buttons, icons — is authored directly, which keeps
the production bundle to three runtime dependencies and leaves no framework
opinions to work around.

| Section | Purpose |
| :-- | :-- |
| `Hero` | Above-the-fold introduction and primary call to action |
| `About` | Background and practice positioning |
| `Services` | Three-stage engagement model: Discovery, Creation, Implementation |
| `Work` | Client projects with scope of responsibility, plus prior employers |
| `Testimonial` | Client reference |
| `Contact` | Validated contact form, direct contact details, social links |
| `Footer` | Secondary navigation and attribution |

## Client Work

Projects featured on the site, with the role held on each:

| Client | Location | Scope |
| :-- | :-- | :-- |
| [LicenseTraxx](http://licensetraxx.com/) | Arlington, VA | Project management, system architecture, consultation, development, design |
| [Kirks Institute](http://kirksinstitute.com/) | Arlington, VA | Project management, system architecture, consultation, development, design |
| [Ashmead Insurance](https://ashmeadins.com/) (formerly The Blystone Company) | Hatfield, PA | Development, design, technical support |

Prior engineering roles referenced: Penn State, Infor, Deacom, and Bravosolution
(now Jaggaer).

## Tech Stack

| Technology | Use | Notes |
| :-- | :-- | :-- |
| React 19 | UI runtime | Function components with hooks; no class components |
| Vite 8 | Build and dev server | Native ESM, hot module replacement |
| CSS Modules | Styling | One stylesheet per component, locally scoped class names |
| CSS custom properties | Design tokens | 23 variables centralising color, spacing, and type |
| Formspree | Contact delivery | Serverless form endpoint; no backend to host or secure |
| ESLint 10 | Linting | Flat config, with React Hooks and Fast Refresh rules |

## Implementation Notes

**Dependency discipline.** The entire site ships with three runtime dependencies:
`react`, `react-dom`, and `@formspree/react`. There is no UI kit, no CSS framework,
no animation library, and no icon package — icons are hand-authored inline SVG, so
they inherit `currentColor` and cost nothing in transfer size or version churn.

**Scoped styling over global cascade.** Each component owns a `.module.css` file.
Class names are hashed at build time, so no component can leak a style into
another. Shared values live as custom properties on `:root`, which means a palette
or spacing change is a single-file edit rather than a find-and-replace.

**Responsive layout.** Thirteen media queries across the component stylesheets
adapt the grid, type scale, and navigation between mobile and desktop. The
navigation collapses to a toggle menu below the breakpoint.

**Navigation behavior.** The navbar subscribes to scroll position and applies a
condensed, elevated state past 20px. Anchor links are intercepted to trigger
`scrollIntoView` with smooth behavior instead of a hard jump, and selecting a link
closes the mobile menu. The scroll listener is registered and torn down inside
`useEffect`, so it does not outlive the component.

**Form handling.** The contact form uses Formspree's `useForm` hook with
`ValidationError` boundaries for per-field and form-level errors, giving submission
and error states without standing up or maintaining a mail backend.

**Accessibility.** Interactive controls without visible text labels carry
`aria-label`; the testimonial region is associated with its heading via
`aria-labelledby`; decorative iconography is marked `aria-hidden`.

## Project Structure

```
src/
├── App.jsx                  Section composition and page order
├── main.jsx                 React root
├── index.css                Design tokens and base styles
├── components/
│   ├── Navbar.jsx           Scroll state, mobile menu, smooth-scroll anchors
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx         Three-stage process model
│   ├── Work.jsx             Client projects and prior employers
│   ├── Testimonial.jsx
│   ├── Contact.jsx          Formspree integration and contact details
│   ├── Footer.jsx
│   └── *.module.css         Scoped styles, one per component
└── assets/                  Client logos and imagery

public/
├── Frank_Santaguida_Resume.pdf
├── favicon.svg
└── icons.svg
```

## Local Development

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

The dev server prints a local URL with hot module replacement enabled.

| Command | Purpose |
| :-- | :-- |
| `npm run dev` | Start the development server |
| `npm run build` | Produce an optimised production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

## Deployment

`npm run build` emits a fully static bundle to `dist/`, deployable to any static
host or CDN. The contact form posts directly to Formspree, so no server-side
runtime is required.
