import './Bootstrap.min.css'

function Product(props){
    
console.log(props)
return <ul className='c1'><li>
    nom{props.title}
    </li>
<li>prix :{props.prix}</li>
</ul>
}

export default Product