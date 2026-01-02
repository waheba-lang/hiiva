import React from "react";

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
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        .home{
          position:relative;
          width:100%;
          height:100vh;
          overflow:hidden;
          background:black;
        }

        .bg-video{
          position:absolute;
          top:50%;
          left:50%;
          width:100%;
          height:100%;
          object-fit:cover;
          transform:translate(-50%, -50%);
          opacity:0.3;
        }

        .navbar{
          position:relative;
          z-index:10;
          width:100%;
          padding:20px 40px;
          color:white;
          font-size:22px;
          font-weight:bold;
        }
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #7a5c45; /* brown ناعم */
  padding: 14px 45px;
  font-family: 'Inter', sans-serif;
}

.logo {
  color: #f2eee9;
  font-size: 22px;
  font-weight: 500;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 32px;
}

.nav-links li a {
 
  font-family: 'Playfair Display', serif;

  color: #f0eae4;
  text-decoration: none;
  font-size: 30px;
  font-weight: 400;
  transition: 
    transform 0.35s ease,
    color 0.35s ease,
    opacity 0.35s ease;
  opacity: 0.85;
}

.nav-links li a:hover {
  transform: scale(1.05); 
  color: #e6d6c3;        
  opacity: 1;
}







        .center{
          font-family: 'Playfair Display', serif;

          color:white;
          font-size:150px;
          font-weight:1000;
          text-align:left;
          margin-top:30vh;
          letter-spacing:7px;

          
        }
          .center{
          border-right:4px solid #1a0e05ff;
          animation: blink .7s infinite;}

        @keyframes blink{
          50%{ border-color:transparent; }

       
          
        }

       
          
        }

        
          }
        }
      .title {
        font-family: 'Playfair Display', serif;

  position: absolute;
  z-index: 10;
  margin-left: 40px;
  margin-top: 20px;
  color: #e2c8a8ff;
  font-family: 'Inter', sans-serif;
}

.title h1 {

  font-size:48px;
  font-weight: 300px;
  letter-spacing: 2px;
  opacity: 0.85;
  color:white;
}




      `}</style>

      <div className="home">
        <video className="bg-video" autoPlay loop muted playsInline>
          <source src="/vdbg.mp4" type="video/mp4" />
        </video>

        <nav className="navbar">
          
          <h2>OUJDA'S</h2>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#history">History</a></li>
            <li><a href="#culture">Culture</a></li>
            <li><a href="#weather">Weather</a></li>
          </ul>
        </nav>

        <div className="center">
          {display}
        </div>
        <div className="title"><h1>Oujda: The spirit of the East in one city</h1></div>
      </div>
    </>
  );
}