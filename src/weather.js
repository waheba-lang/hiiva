import React, { useEffect, useState } from "react";
import axios from "axios";

function WeatherOujda() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=34.6814&longitude=-1.9086&current_weather=true"
      )
      .then(res => setWeather(res.data.current_weather));
  }, []);

  // اختيار icon حسب حالة الطقس
  const getIcon = (code) => {
    if (code === 0) return "☀️";
    if (code <= 3) return "⛅";
    if (code >= 45 && code <= 48) return "🌫";
    if (code >= 51 && code <= 67) return "🌧";
    if (code >= 71 && code <= 77) return "❄️";
    if (code >= 80) return "⛈";
    return "🌤";
  };

  return (
    <>
      {/* CSS داخل نفس الملف */}
      <style>{`
        .weather-card {



        
          width: 800px;
          height:800px;
          margin: 60px auto;
          padding: 25px;
          background-image:url("/wtspbk.jpg");
          border-radius: 20px;
          color: black;
          text-align: center;
          font-family: Arial, sans-serif;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .weather-card h2 {
          margin-bottom: 15px;
          font-size: 22px;
        }

        .icon {
          font-size: 70px;
          margin: 10px 0;
        }

        .temp {
          font-size: 42px;
          font-weight: bold;
          margin: 10px 0;
        }

        .info {
          font-size: 16px;
          margin-top: 5px;
        }
      `}</style>

      <div className="weather-card">
        <h2>Météo à Oujda</h2>

        {weather ? (
          <>
            <div className="icon">
              {getIcon(weather.weathercode)}
            </div>

            <div className="temp">
              {weather.temperature} °C
            </div>

            <div className="info">
              🌬 Vent : {weather.windspeed} km/h
            </div>
          </>
        ) : (
          <p>Chargement...</p>
        )}
      </div>
    </>
  );
}

export default WeatherOujda;