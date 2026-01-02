const { useState } = require("react")
import './styleF.css'

export default function FmodifPassword(props){
const [message,setMessage]=useState("")
let test=false
let Verfier=()=>{
    let x1=""
     x1=document.getElementById('t1').value;
    if(x1.length<4){
        setMessage("password doit avoir 4 lettre")
    }else{
        setMessage("ok ")
    }
}
  return <>
    <label>entrer pasword</label>
    <input type="password" id="t1" 
    onChange={Verfier}
    />
    <div className={test==true?"c1":"c2"}>{message}</div>
    <label>confirmer pasword</label>
    <input type="password" id="t2" 
    onChange={()=>{}}
    />
    </>
}