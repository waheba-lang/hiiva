import React, { useState } from "react";
//au lieu de la class
export default function Element(props){
const [message,setMessage]=useState("debut")
const [cmp,setCmp]=useState(0)
    return <>
            <input type="text" onChange={(event)=>{
                    setMessage(event.target.value)
            } }/>
            <input type="button" value="button" onClick={
                    ()=>{
                        setCmp(cmp+1)
                    }
            } />
            <br />
            <span>{message}</span>
            <hr/>
            compteur:{cmp}
            <hr />
            {props.v1}

            </>
}





/*
export default class Element extends  React.Component{
constructor(props){
    super(props)
    this.state={m:'debut '}
}
render(){ return<>
            <input type="text" onChange={(event)=>{
            this.setState({m:event.target.value})
            
            }} />
            <br />
            <span>{this.state.m}</span>

            </>

}
verfier=()=>{

}
}*/