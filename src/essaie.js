import { useState } from "react";

export default function HoverSwitch() {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: hover ? "400px" : "250px",
        height: hover ? "300px" : "150px",
        background: hover ? "#4c9aff" : "#ff7676",
        borderRadius: "15px",
        transition: "all 0.5s ease",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        cursor: "pointer",
      }}
    >
      {hover ? (
        <div>
          <h2>المحتوى الثاني</h2>
          <p>طول وعرض تبدلو 🎉</p>
        </div>
      ) : (
        <div>
          <h2>المحتوى الأول</h2>
          <p>ديري Hover 👀</p>
        </div>
      )}
    </div>
  );
}