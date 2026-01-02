// import { useState } from "react";
// function Manupulat(props){
//     let [V,SetV]=useState([...props.T]);
//     let [X,SetX]=useState("");
//     let [MssEr,SetMssEr]=useState("")
//     let f1=(event)=>{SetX(event.target.value)}
//     return(
//         <>
//         <form>
//         <label>ville</label><br></br>
//         <input  type="text" value={X} onChange={f1}/>
//         <button type="button"onClick={()=>{
//             if (X==''){SetMssEr('insserer une ville svp')}
//             else{
//              SetV([...V,X])
//                 SetX('')
//                 SetMssEr('')}}}
//            >ajouter</button>
//         <ul>{V.map((k,i)=>(<li key={i}>{k} 
//             <button 
//              type="button" onClick={()=>{
//               let E=V.filter((a,j)=>{return(k!=a)})
//              SetV(E)}}>la suppression</button>
//               </li>))}</ul>



//              <button type="button" onClick={()=>{
//             let E=V.filter((a,j)=>(X!=a))
//             SetV(E)
//         }}>supprimer</button>
//             <span style={{color:"red"}}>{MssEr}</span>
//         </form>
//         </>
//     )
// }
// export default Manupulat 