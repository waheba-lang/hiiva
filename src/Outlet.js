import React from "react";
let Home =()=>{return <div>c est home</div>}
let Blogs =()=>{return <div>c est blogs</div>}
let contact =()=>{return <div>c est contact</div>}
let ErrorPage=()=>{return <div> lien not exist</div>}
let layout =()=>{
    return(
        <div>
         <ul>
            <li><link to="/">home</link></li>
            <li><link to="blogs">blogs</link></li>
            <li><link to="contact">contact</link></li>
         </ul>
         <div style={{backgroundColor:"yellow"}}>ici affichage du rest

         </div>
         <Outlet/>
        </div>
    )
}