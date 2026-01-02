// 1) importer React et ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'

const element=document.getElementById("root");
const root=ReactDOM.createRoot(element)
root.render(<App/>)





// EXER1
// import { useState } from 'react'
// import ReactDOM from 'react-dom/client'
 
// const Calculat =()=> {
//     const [valA, setValeurA] = useState('');
//     const [valB, setValeurB] = useState('');
//     const [resultat, setResultat] = useState('');






//     const calculer = (op) => {
//         const x = Number(valA);
//         const y = Number(valB);
//         if (op === "+") setResultat(x + y)
//         if (op === "-") setResultat(x - y)
//         if (op === "*") setResultat(x * y)
//         if (op === "/") setResultat(y !== 0 ? x / y : "Erreur");

//     }
//     const reset = () => {
//         setValeurA("");
//         setValeurB("");
//         setResultat("");
//     };

//     return (
//         <div>
//             <h1>Calculatrice</h1>
//             <label>valeurA</label>
//             <input type='text' onChange={(e) => setValeurA(e.target.value)}></input>
//             <label>valeurB</label>
//             <input type='text' onChange={(e) => setValeurB(e.target.value)}></input>
//             <button type="button" onClick={()=>{  calculer("+")}}>+</button>
//             <button type="button" onClick={() => {calculer("-")}}>*</button>
//             <button type="button" onClick={() =>{calculer("-")}}>-</button>
//             <button type="button" onClick={() =>{calculer("/")}}>/</button>
//             <button type="button" onClick={reset}>renitialiser</button>
//             <p>resultat {resultat} </p>

//         </div>

//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('app'));
// root.render(<Calculat/>);
// EXER2
// import { useState } from "react";

// EXE2

// let  CheckBoxNoirBlanc = () => {
//   const [cocher, setCocher] = useState(false);
//   const [widthValue, setWidthValue] = useState(50);

//   const divStyle = {//style dynamique selon les etat du checkbox et valeur de range
//     width: `${widthValue}%`,
//     margin: '20px auto',
//     backgroundColor: cocher ? '#000' : '#fff',
//     color: cocher ? '#fff' : '#000',// la en fait un test
//     border: `2px solid ${cocher ? '#fff' : '#000'}`,
//     transition: 'all 0.3s ease',// pour une transition lente
//   };
//   const handleCHECK = (e) =>{
//     setCocher(e.target.checked);
//   }
//   const handleWith = (e) =>{
//     setCocher(e.target.checked);
//   }

//   return (
//     <div>
//       <div style={{ marginBottom: '20px' }}>
//         <label><input type="checkbox" checked={cocher} onChange={handleCHECK}/>Dark Mode </label>
//       </div>
//       <div style={{ marginBottom: '20px' }}>
//         <label>
//          la valeur du  Width: {widthValue}% <input type="range"  min="0" max="100" value={widthValue} onChange={handleWith}   />
//         </label>
//       </div>
//       <div style={divStyle}>
//         <p>salam alikom</p>
//         <p>  Width: {widthValue}% - Dark Mode: {cocher ? 'active' : 'desactiver'}</p>
//       </div>
//     </div>
//   );
// };

// export default CheckBoxNoirBlanc
