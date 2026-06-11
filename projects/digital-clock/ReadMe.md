# 🕐 Digital Clock

A clean and minimal digital clock web app that displays the current time and date in real time — built with pure HTML, CSS, and JavaScript.

---

## 📸 Preview

> A dark-themed clock interface centered on the screen, showing live hours, minutes, seconds, and the full date below.

---

## ✨ Features

- ⏱️ Live time display updated every second
- 📅 Full date display (e.g., *Thursday, June 11, 2026*)
- 🎨 Sleek dark UI with gradient background
- 💡 Zero dependencies — pure vanilla HTML, CSS, and JavaScript
- 📱 Centered layout that works across screen sizes

---

## 🗂️ Project Structure

```
digital-clock/
├── index.html    # Main HTML structure
├── style.css     # Styling and layout
└── script.js     # Clock logic and DOM updates
```

---

## 🚀 Getting Started

No installation or build tools needed.

### Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/digital-clock.git
   ```

2. **Navigate into the project folder**
   ```bash
   cd digital-clock
   ```

3. **Open in your browser**
   ```bash
   open index.html
   ```
   Or simply double-click `index.html` in your file explorer.

---

## 🛠️ How It Works

- `index.html` — Sets up the page layout with a clock container, a `#clock` div for time, and a `#date` div for the date.
- `style.css` — Applies a dark gradient background, centers the clock card, and styles the time in large white text.
- `script.js` — Uses `setInterval` to call `updateClock()` every **1000ms**, which reads the current time via `new Date()`, pads single digits with a leading zero, and updates the DOM.

---

## 🧰 Built With

- HTML5
- CSS3
- Vanilla JavaScript (ES6)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

Built as a beginner-friendly JavaScript project to practice DOM manipulation and the `Date` API.
