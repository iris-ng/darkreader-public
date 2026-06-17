# Integration checklist (run in Edge AND Chrome)

For each browser: `node build.mjs`, then load `dist/` unpacked (Developer mode → Load unpacked), then:

- [ ] vector.pdf: renders in Smart Dark; text crisp (not soft/blurry); white→dark grey; black→off-white.
- [ ] vector.pdf: a yellow/green region (if any) keeps a recognisable hue (hue-rotate), not a harsh invert.
- [ ] scanned.pdf: a B&W scan darkens correctly and text stays crisp (a colour photo will invert to a negative — expected with filter-based dark mode).
- [ ] highlighted.pdf: pre-existing highlights keep a recognisable hue.
- [ ] Toolbar theme button cycles Smart Dark → Warm Sepia → Off with no reload; the `d` key also cycles.
- [ ] Background-shade slider: dragging changes the page grey live; the chosen value persists across reload.
- [ ] Tab title shows the PDF's title/filename, not "PDF Dark Reader".
- [ ] Toolbar stays pinned by default; enabling auto-hide in the popup makes it hide on scroll-down.
- [ ] Highlighter: enable it, select text → highlight appears in the chosen color; persists across reload of the same PDF.
- [ ] Multi-line highlight is uniform across all lines (middle lines not darker/glaring than the ends).
- [ ] Click a highlight → it is removed.
- [ ] A different PDF has separate highlights; reopening the first restores the right set.
- [ ] password.pdf: prompts for the password; on the correct password it renders themed.
- [ ] large.pdf: scrolling stays smooth; memory stable; pages theme as they appear.
- [ ] Broken URL (404 .pdf): dark error card with Retry + Open original.
- [ ] Popup: changing default theme applies to the next opened PDF; export downloads a JSON; import restores highlights.
- [ ] file:// PDF: with "Allow local files" ON (popup), a local PDF opens themed; with it OFF, the browser handles it normally.
