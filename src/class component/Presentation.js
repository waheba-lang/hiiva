import React from 'react'
export default class Presentation extends React.Component{
constructor(props) {
super(props)
this.nom='Rami';
this.prenom="Ahmed"
}
render(){
return (
<div >
<h2>Salut ici le nom et prenom </h2>
</div>
)
}
}