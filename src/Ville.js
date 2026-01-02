import React from "react";


/*function Ville(props){
//props.attribut que vs passez dans <Ville />
    let V=["oujda","casablanca","tanger","azilal"]
    let st1={backgroundColor:props.couleur}
    let x=<ul style={st1}>
        {V.map((x,i)=><li key={i}>{x}</li>)}
        </ul>;
    return x
}*/

class Ville extends React.Component{
    constructor(props){
        super(props)
        this.V=["oujda","casablanca","tanger","azilal"]
    }
    render(){
        let st1={color:this.props.couleur}
        let st2={fontSize:this.props.tailleCaractere}
        return <>
          {this.props.tailleCaractere}
         <ul style={st1}>
        {this.V.map((v,i)=>{

            let cas1=<li  key={i}>{v}</li>
            let cas2=<li style={st2} key={i}>{v}</li>
            return (i%2!=0)?cas1:cas2})}
        </ul></>}
}

export default Ville