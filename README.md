# Personal Portfolio — Jarin Tasnim Sreya

A four-page academic portfolio for CSE443 Web Computing. HTML5, custom CSS, JavaScript, jQuery 3.7.1 and AJAX (local JSON). No build or database required.

## Run locally
Open a terminal in this folder and run `python -m http.server 8000` (or `py -m http.server 8000` on Windows). Open http://localhost:8000 in a browser. Stop with Ctrl+C. Opening index.html directly works for basic navigation but AJAX may be blocked by browser security.

## Publish
Create a GitHub repository named `portfolio`, upload the **contents** of this folder (index.html must be at repository root), then Settings > Pages > Deploy from a branch > main > / (root). Use the actual published URL in the report.

## Features to verify yourself
- All four navigation links, images, external links and mobile layout.
- Projects: load/hide details; Network tab should show projects.json HTTP 200.
- Contact: empty fields, invalid email, whitespace-only name, short message, valid submission. No email is sent.
- Repeat in Chrome and Firefox, capture your own screenshots and record actual observations.

## Academic notes
Network and compiler images come from archived group coursework; the blood bank image comes from an archived dashboard photo. PharmaSync diagram is conceptual, not a screenshot. Group roles are not claimed. No old PHP files or credentials are published. Confirm descriptions and revise the code/content yourself in accordance with course rules on assistance. No certificates or unconfirmed education details are invented.

## Code guide
`index.html`, `about.html`, `projects.html`, `contact.html`: semantic HTML and common navigation. `css/style.css`: shared layout and responsive media query. `js/script.js`: jQuery menu, AJAX details and plain JS form validation. `data/projects.json`: project detail records. jQuery is a third-party MIT-licensed library; its license header is retained.
