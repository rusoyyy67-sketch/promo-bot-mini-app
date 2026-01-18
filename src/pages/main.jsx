import React, { useState, useEffect } from "react";
import "./main.css";

function MainPage() {
  const [message, setMessage] = useState("");
  const [tg, setTg] = useState(null);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;
      webApp.expand(); // расширяем окно Mini App
      setTg(webApp);
    }
  }, []);

  const sendData = () => {
    if (tg) {
      tg.sendData(JSON.stringify({ message }));
      tg.close(); // закрываем Mini App
    }
  };

  return (
    <div className="app-container">
      <h1>Привет из React Mini App 🚀</h1>
      <input
        type="text"
        placeholder="Напиши что-нибудь"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendData}>Отправить боту</button>
    </div>
  );
}

export default MainPage;
