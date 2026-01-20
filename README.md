# Evolve — ElectroSpark Quiz Game

A small web quiz game built with plain HTML/CSS/JavaScript. Designed for quick knowledge checks with a neon "electro" aesthetic and animated circuit background.

## Demo
Open `index.html` in your browser or serve the folder with a simple HTTP server:

```bash
# serve with Python 3
python3 -m http.server 8000
# then open http://localhost:8000
```

## Files
- `index.html` — main page
- `style.css` — styles and responsive tweaks
- `script.js` — game logic and canvas background
- `questions.js` — question set

## Development
You can play locally by opening `index.html` or using the above HTTP server command. For a nicer dev workflow you can install `live-server` and run it from the project root:

```bash
npm i -g live-server
live-server --open=./index.html
```

## Contributing
- Add new questions in `questions.js`.
- Prefer short, clear multiple-choice options.
- If you change JavaScript, ensure the quiz works without console errors.

## License
This project is available under the MIT License — see `LICENSE`.

---

Repo: https://github.com/codewithAK09/evolve-game.git
