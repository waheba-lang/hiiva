export default function Weathertt() {

  const styles = `
  /* Background */
  .weather-container {
    width: 100%;
    height: 100vh;
    background-image: url("/bgbgbg.jpg");
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
    font-family: Arial, Helvetica, sans-serif;
  }

  /* Snow Effect */
  .snow {
    position: absolute;
    inset: 0;
    background: url("https://i.ibb.co/pj6Q0tG/snow.png");
    animation: snow 8s linear infinite;
    pointer-events: none;
  }

  @keyframes snow {
    from { background-position: 0 0; }
    to { background-position: 0 600px; }
  }

  /* Glass Card */
  .weather-card {
    width: 65%;
    margin: 120px auto;
    padding: 30px;
    border-radius: 25px;
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,0.3);
    color: white;
  }

  .top {
    text-align: center;
  }

  .top h1 {
    font-size: 55px;
    margin: 10px 0;
  }

  .details {
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 10px;
    text-align: center;
    font-weight: 600;
  }
  `;

  return (
    <div className="weather-container">
      <style>{styles}</style>

      <div className="snow"></div>

      <div className="weather-card">
        <div className="top">
          <h2>-6°C</h2>
          <p>Feels like -11°</p>
          <h1>20:02</h1>
          <p>Thursday, 22 March</p>
        </div>

        <div className="details">
          <div>Humidity: 88%</div>
          <div>Wind: 13 km/h</div>
          <div>Sunrise: 05:33</div>
          <div>Sunset: 17:49</div>
        </div>
      </div>
    </div>
  );
}