# PayWise Content Preview — Landing Page Plan

A single, easy-to-scroll page where your client can preview the full month's content drop in the order it'll be delivered. Clean, minimal, presentation-focused — no fancy interactions, just clear sections with proper visual hierarchy.

## Page Structure (top to bottom)

### 1. Header / Intro

- PayWise logo + title: "Content Preview — [Month]"
- Short one-line subtitle (e.g. "Full social, blog, and newsletter package")
- Sticky top nav with anchor links: Grid · Carousels · Blogs · Newsletters (smooth scroll)

### 2. Grid Snapshot

- Section heading: "Instagram Grid Preview"
- Short caption explaining: "How the feed will look at end of month — first slide of each carousel"
- 3-column square grid (IG-style) showing 7 thumbnails (cover image of each carousel)
- Hover: subtle zoom + carousel number label

### 3. Carousels (7 total)

- Section heading: "Carousels"
- One block per carousel, stacked vertically:
  - Carousel number + short title/caption above
  - Horizontal scroll/swipe row of square slides (or a simple lightbox-style carousel using shadcn's Carousel component)
  - Caption/copy text shown below the slides
- Consistent card styling, generous spacing between carousels

### 4. Blog Posts (5 total)

- Section heading: "Blog Posts — Web + LinkedIn"
- Grid of 5 blog cards (responsive: 1 col mobile, 2-3 col desktop), each card shows:
  - Blog banner image (landscape)
  - Blog title
  - Short preview/excerpt
  - "Read full post" button → links to Google Doc
  - Small thumbnail of the 9:16 story image beside or below the banner, labeled "Story"
  - Clicking the story thumbnail opens it in a lightbox at full 9:16

### 5. Newsletters (4 total)

- Section heading: "Newsletters"
- Same card pattern as blogs:
  - Newsletter banner image
  - Subject line / title
  - Preview text
  - "Read full newsletter" link → Google Doc
  - 9:16 story thumbnail (lightbox on click)

### 6. Footer

- Simple "Prepared by [you] for PayWise" line

## Design Notes

- Light, clean background; PayWise-aligned palette (blues/greens from the reference)
- System font stack or Inter — keep it neutral so the content pops
- Generous whitespace, clear section dividers
- Smooth scroll between anchor sections
- Fully responsive (client may view on mobile)
- Lightbox modal for story (9:16) and carousel slide previews so client can see them full size

## Content Upload Plan

You'll upload assets in batches. Page will be built with placeholder slots structured to receive:

- 7 carousels × N slides each + caption text
- 5 blog banners + 5 story images + Google Doc URLs + titles/previews
- 4 newsletter banners + 4 story images + Google Doc URLs + titles/previews
- 7 carousel cover images (auto-derived = slide 1 of each carousel, so no extra upload)

## Technical Details

- TanStack Start single route at `/` (no auth, no backend needed)
- Shadcn `Carousel` for carousel slides, `Dialog` for lightbox
- Assets stored under `src/assets/paywise/` (carousels/, blogs/, newsletters/)
- Data-driven: a single `content.ts` config file with arrays for carousels/blogs/newsletters so adding items as you upload is a one-line change
- Smooth scroll via CSS `scroll-behavior: smooth` + anchor IDs

## Open Questions (optional — can decide later)

- Do you want a way for the client to leave comments/approval per item, or is this view-only?
- Any specific PayWise brand colors/fonts to match, or should I pull from the reference image (blue/green)?
