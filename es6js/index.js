class Chrono{
     constructor(){

     }
    appelTimer(d){
        let cmpt={second:0} 
        const incremente=()=>{cmpt.second++;
            if(cmpt.second==60)
            {
                cmpt.second=0; 
                clearInterval(compteur)//arreter timer
                }
            d.innerHTML=cmpt.second
        }
        const compteur=setInterval(incremente,1000)
        //demarrer timer 
    }
}

export default Chrono
//autre method export {Chrono}

