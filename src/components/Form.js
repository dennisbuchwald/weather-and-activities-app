import "./form.css";
import { useState } from "react";

// In geschweiften Klammern da ein Objekt übergeben wird, ohne Klammern wenn es eine Funktion gewesen wäre
export function Form({ onAddActivity }) {
  const [name, setName] = useState("");
  const [isForGoodWeather, setIsForGoodWeather] = useState(false);

  //keine Funktion wie müssen hier eine "const" mit dem wert einer Funktion vergeben
  const handleSubmit = (event) => {
    event.preventDefault();

    // Gibt den Namen und den isForGoodWeather-Wert aus den Zuständen aus
    const data = { name, isForGoodWeather };

    // Rufe onAddActivity auf und übergebe das Datenobjekt als Argument
    onAddActivity(data);

    // Setze den Namen-Zustand auf leer und den isForGoodWeather-Zustand auf false
    setName("");
    setIsForGoodWeather(false);

    // Setze den Fokus auf das erste input-Element
    document.getElementById("name").focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new Activity</h2>
      <label className="name">Name:</label>
      <input
        id="name"
        type="text"
        onChange={(event) => setName(event.target.value)}
        // value doch nötig, da sonst die die `handleSubmit`nicht darauf zugreifen kann
        value={name}
      />
      <br />
      <label className="good-weather-activity">Good-weather activity:</label>
      <input
        type="checkbox"
        id="good-weather-activity"
        onChange={(event) => setIsForGoodWeather(event.target.checked)}
        checked={isForGoodWeather}
      />
      <br />
      <input type="submit" />
    </form>
  );
}
