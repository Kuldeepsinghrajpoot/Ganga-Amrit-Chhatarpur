# Ganga Amrit Website (Next.js 16 + React 19 + TypeScript + Tailwind CSS)

## How to Run the Project

```bash
# Node.js 20.9 or later is required
npm install
npm run dev      # http://localhost:3000
npm run build    # Check the production build
npm start
```

## Project Structure

- `app/` — Pages: `/`, `/products`, `/about`, `/faq`, `/contact`, `/terms`, `/privacy`, 404 page, sitemap, and robots.
- `components/` — Header, Footer, Hero, ProductCard, Gallery, ContactForm, and other sections.
- `lib/data.ts` — **Update all website content from this file**, including products, FAQs, About Us content in Hindi and English, legal text, phone number, and address.
- `public/images/` — Photos of your three milk packs: Gold, Chai Special, and Double Toned.
- `app/globals.css` — Contains the complete design styles. Tailwind CSS preflight is disabled to preserve the existing design, while Tailwind utility classes remain available for new development.

## Animations (New Features)

- Smooth scrolling with inertia using Lenis, along with a scroll progress bar at the top.
- Hero section: Word-by-word headline reveal, parallax effects on milk packs, and text fading on scroll.
- The header hides when scrolling down and reappears when scrolling up.
- Cards and sections animate into view one by one, and statistics use count-up animations.
- Milk packs have a 3D tilt effect on mouse hover. Buttons feature a shine effect, and pages have soft transitions.
- All animations are disabled when the user's system has `prefers-reduced-motion` enabled.

## Hero Video

Place your video at `public/hero.mp4`.

- Recommended duration: 10–15 seconds.
- Maximum file size: 5 MB.
- The video plays in the hero section when available. If the video is missing, the hero section displays a plain background instead.

## Factory Photos

The gallery loads factory photos from:

`https://www.gangaamrit.co.in/gallery/factory-1.jpg` through `factory-8.jpg`.

Alternatively, you can store the photos locally in `public/gallery/` and update the `GALLERY` image sources in `lib/data.ts`.

## Contact Form

The contact form opens WhatsApp with a pre-filled message to **+91 74158 02748**.

No data is stored in a database.

If you want to save contact submissions or send emails, you will need to add an `/api/contact` route.

## Important Notes

- An internet connection is required during the first `npm run build` if Google Fonts need to be downloaded.
- This project has not been tested by running `npm install` or `npm run build` in this chat because internet access was unavailable. Run `npm run build` locally to verify that the project builds successfully.
- The Terms and Privacy Policy content consists of general draft text. Have it reviewed by a qualified professional before publishing.
- The domain `https://www.gangaamrit.co.in` is configured in `SITE.url` inside `lib/data.ts`.

## Performance Optimization (If the Website Feels Slow)

- The development server (`npm run dev`) can be slower and less responsive than the production version. To evaluate actual performance, run `npm run build` followed by `npm start`.
- The hero video plays only while it is visible on the screen and pauses when it is no longer visible.
- Heavy blur effects have been removed from the header, and expensive blending and shadow effects have been reduced.
- Lower sections are rendered only when they approach the visible scroll area.

## Milk Pack Photos

The files in `public/images/*.webp` are transparent images with their backgrounds removed.

When introducing a new milk pack, replace the corresponding image file while keeping the same filename.

## Next.js 16 Upgrade Notes

- Remove the old `node_modules`, `.next`, and lock file, then perform a fresh installation using `pnpm install` or `npm install`.
- `next lint` has been removed in Next.js 16. The `npm run lint` script now runs `eslint .` directly using `eslint.config.mjs`.
- Turbopack is now the default for both development and production builds.
- The `priority` property in `next/image` has been replaced by `preload` for image preloading.
