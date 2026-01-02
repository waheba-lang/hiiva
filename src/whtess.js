import { useEffect, useState } from "react";
import axios from "axios";

export default function OujdaWeather() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const res = await axios.get(
          "https://api.open-meteo.com/v1/forecast?latitude=34.68&longitude=-1.91&past_days=7&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Africa/Casablanca"
        );
        setData(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Error loading weather</p>;

  const daily = data.daily;

  // اليوم هو آخر يوم فاللائحة
  const lastIndex = daily.time.length - 1;
  const todayDate = daily.time[lastIndex];
  const todayMax = daily.temperature_2m_max[lastIndex];
  const todayMin = daily.temperature_2m_min[lastIndex];

  // الأيام لي دازو بلا اليوم
  const pastDays = daily.time.slice(0, lastIndex);

  return (
    <div
      style={{
        fontFamily: "Arial",
        padding: "20px",
        color: "white",
        background: "#0a1228",
        minHeight: "100vh"
      }}
    >
      {/* ======= طقس اليوم ======= */}
      <div
        style={{
          background: "linear-gradient(135deg,#0072ff,#00c6ff)",
          padding: "25px",
          borderRadius: "15px",
          marginBottom: "25px",
          textAlign: "center",
          boxShadow: "0px 0px 20px rgba(0,0,0,.3)"
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>🌤 Oujda — Weather Today</h1>
        <h2 style={{ marginBottom: "10px" }}>{todayDate}</h2>

        <p style={{ fontSize: "24px", margin: "5px 0" }}>
          🌡️ Max: <b>{todayMax}°C</b>
        </p>
        <p style={{ fontSize: "24px", margin: "5px 0" }}>
          🧊 Min: <b>{todayMin}°C</b>
        </p>

        <p style={{ marginTop: "10px" }}>
          Wind: {data.current_weather.windspeed} km/h 🌬️
        </p>
      </div>

      {/* ======= الأسبوع لي فات ======= */}
      <h2 style={{ marginBottom: "15px" }}>📅 Last 7 Days Weather</h2>

      <div>
        {pastDays.map((day, i) => (
          <div
            key={day}
            style={{
              background: "#111c3a",
              padding: "12px",
              borderRadius: "10px",
              marginBottom: "10px",
              border: "1px solid #2a3c6f"
            }}
          >
            <p style={{ margin: 0, fontSize: "16px" }}>
              <b>{day}</b> — Max: {daily.temperature_2m_max[i]}°C | Min:{" "}
              {daily.temperature_2m_min[i]}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}