# 🌤️ Weather App

A simple and clean weather app built with React and Vite. Search any city to get real-time temperature, humidity, weather condition, and wind speed using the OpenWeatherMap API.

---

## 📸 Preview

> A pink-gradient card UI where users enter a city name and instantly see live weather data including temperature, humidity, condition, and wind speed.

---

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Displays temperature (°C), humidity, weather condition, and wind speed
- 🎨 Clean gradient UI with responsive design
- ⚡ Built with Vite for fast development and builds
- 📦 Uses Axios for API requests

---

## 🗂️ Project Structure

```
weather-app/
├── index.html
├── vite.config.js
├── package.json
├── .env               ← your API key goes here (never commit this)
├── .gitignore
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    └── App.css
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- A free API key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your API key**

   Create a `.env` file in the project root:
   ```
   VITE_API_KEY=your_openweathermap_api_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. Open your browser at `http://localhost:5173`

---

## 🔧 Available Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🌐 API Used

- [OpenWeatherMap - Current Weather API](https://openweathermap.org/current)
  - Endpoint: `api.openweathermap.org/data/2.5/weather`
  - Units: Metric (°C)

---

## 🛠️ Built With

- [React 19](https://react.dev/)
- [Vite 7](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [OpenWeatherMap API](https://openweathermap.org/api)

---

## ⚠️ Important

Never commit your `.env` file to GitHub. Make sure `.env` is listed in your `.gitignore`:
```
.env
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
