import React from "react"
import Product  from "./Product"

//creation d un React.Componenent
//soit function ou une class qui herite de React.compopenent
//si vs une class render(){} constructor ++
//le plus simple function
function Products(){
    let click1=()=>{alert()}
    return <div onClick={click1}>
    <Product  quantite="20" title="TV" 
    prix="1500" />
    <Product title="projector" 
    prix="2000"/ >                
    </div>
}

export  {Products}