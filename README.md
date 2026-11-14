# My Portfolio

## Accessibility fixes
- Added `id="main"` to `<main>` on every page so the skip link works (WAVE flagged a broken skip link on index and projects).
- Added a "Skip to main content" link so keyboard users can bypass the navigation.
- Added `aria-current="page"` and an underline to the current nav link.
- Changed the focus outline to dark on light backgrounds so it passes the 3:1 contrast minimum.
- Added labels, a fieldset/legend, and text-based error messages to the contact form.

## Color contrast
All text and background pairs pass WCAG AA (checked with the WebAIM Contrast Checker).

## Gestalt principles
- **Proximity:** I used consistent 8px spacing to group headings with their text.
- **Common region:** I placed each section in a white card so content reads as one unit.
- **Similarity:** I styled skill chips and buttons the same way so they look related.
