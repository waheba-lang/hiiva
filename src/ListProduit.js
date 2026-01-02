
let P=[
    {id:1,nom:'tv',prix:2000,photo:'p1.png'},
    {id:2,nom:'projecteur',prix:3000,photo:'p2.png'}
]
function ListProduit(){

let x=<div>
\n   {P.map((v,i)=>{
\n\n  return<> <h1>{v.id} ,{v.nom}</h1>
\n\n\n\n<span>{v.prix}</span>
\n\n\n\n<img src={v.photo} />
\n\n\n\n</>
\n   })}
\n </div>


    return x;
}

export  {ListProduit}