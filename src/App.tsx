// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="Component">
      <section className="Sedans">
        <div className="icon"></div>
        <h1 className="title">Sedans</h1>
        <p>
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button className="learn_more_button">Learn More</button>
      </section>
      <section className="SUVs">
        <div className="icon"></div>
        <h1 className="title">SUVs</h1>
        <p>
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
        <button className="learn_more_button">Learn More</button>
      </section>
      <section className="Luxury">
        <div className="icon"></div>
        <h1 className="title">Luxury</h1>
        <p>
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
        <button className="learn_more_button">Learn More</button>
      </section>
    </div>
  );
}

export default App;
