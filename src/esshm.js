import { useState, useEffect } from "react";

export default function App() {

  const text = "Oujda City";
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 80 : 150;

    const interval = setInterval(() => {
      if (!deleting) {
        // كيزيد الحروف
        if (index < text.length) {
          setDisplay(text.slice(0, index + 1));
          setIndex(index + 1);
        } else {
          setDeleting(true);
        }
      } else {
        // كيمسح الحروف
        if (index > 0) {
          setDisplay(text.slice(0, index - 1));
          setIndex(index - 1);
        } else {
          setDeleting(false);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [index, deleting]);

  return (
    <>
      <style>{`
        h1{
          color:brown;
          font-size:100px;
          font-weight:1000;
          text-align:center;
          margin-top:35vh;
          letter-spacing:5px;
        }

        .cursor{
          border-right:4px solid #4b2e14;
          animation: blink .7s infinite;
        }

        @keyframes blink{
          50%{ border-color:transparent; }
        }
      `}</style>

      <h1>
        <span className="cursor">{display}</span>
      </h1>
    </>
  );
}