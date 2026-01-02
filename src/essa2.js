export default function Apptt() {
  return (
    <>
      {/* CSS داخل نفس الملف */}
      <style>
        {`
          .cards-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
            padding: 50px;
            justify-items: center;
          }

          .card {
            width: 250px;
            height: 150px;
            background: #ff7676;
            border-radius: 15px;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            transition: all .5s ease;
            cursor: pointer;
          }

          .card:hover {
            width: 380px;
            height: 260px;
            background: #4c9aff;
          }

          .content {
            position: absolute;
            text-align: center;
            transition: .4s;
          }

          .normal {
            opacity: 1;
          }

          .hover {
            opacity: 0;
          }

          .card:hover .normal {
            opacity: 0;
          }

          .card:hover .hover {
            opacity: 1;
          }
        `}
      </style>

      {/* HTML */}
      <div className="cards-container">

        <div className="card">
          <div className="content normal">
            <h2>☀️</h2>
            <p>☀️ Summer in Oujda </p>
          </div>

          <div className="content hover">
            <h2>PICTUR</h2>
            <p>Summer in Oujda is very hot, making it one of the hottest seasons in Morocco. Temperatures usually range from 35°C to 42°C, and sometimes go over 45°C. The weather is dry because the city is far from the coast and has low humidity. This makes the heat feel stronger. Eastern winds can also increase the temperature, and the nights are often still warm  </p>
          </div>
        </div>

        <div className="card">
          <div className="content normal">
            <h2> ❄️</h2>
            <p> ❄️ Winter in Oujda</p>
          </div>

          <div className="content hover">
            <h2>PICTUR</h2>
            <p>  Winter in Oujda is relatively cold compared to other Moroccan cities. Temperatures drop a lot at night and early in the morning. At night, it can reach 0°C, while during the day it is usually between 8°C and 14°C. Sometimes, there are very cold mornings with frost, though snow is very rare. So, winter is truly cold, not just a little chilly</p>
          </div>
        </div>

        <div className="card">
          <div className="content normal">
            <h2>🌧️</h2>
            <p> 🌧️ Rain in Oujda</p>
          </div>

          <div className="content hover">
            <h2>PICTUR</h2>
            <p>Oujda does not get a lot of rain and is considered a semi-dry area. Most rain falls in autumn and winter, while summer is almost dry. Even though the rain is limited, some seasons may have more rain, but it is still less than northern or coastal cities </p>
          </div>
        </div>

        <div className="card">
          <div className="content normal">
            <h2>💨</h2>
            <p>💨 Wind in Oujda</p>
          </div>

          <div className="content hover">
            <h2>PICTUR</h2>
            <p>  Winds play an important role in Oujda’s climate. The city often has strong winds, especially in spring. Sometimes, these winds are hot and dry in summer, making the heat feel stronger. In winter, the wind makes the cold feel even colder than the actual temperature. So, winds are an important factor in the city’s weather</p>
          </div>
        </div>

      </div>
    </>
  );
}