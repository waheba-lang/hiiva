import { useState } from "react";

export default function Tppp() {
    const [Id, SetId] = useState("");
    const [Des, SetDes] = useState("");
    const [Price, SetPrice] = useState("");
    const [Total, SetTotal] = useState(0);
    const [List, SetList] = useState([]); 
    
    const elmStyl = {
        form: {
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            margin: "30px",
            padding: "20px",
            border: "2px solid #000",
            borderRadius: "12px",
            backgroundColor: "#fff"
        },
        input: {
            padding: "12px",
            fontSize: "15px",
            borderRadius: "10px",
            border: "1px solid #0c0c0cff", 
        
        },
        button: {
            padding: "12px",
            borderRadius: "10px",
            background: "#6b8cff",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            border: "none",
            cursor: "pointer"
        },
        label: {
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            fontSize: "14px",
            color: "#444",
            fontWeight: "500",
        },
        ul: {
            listStyle: "none",
            padding: "0",
            margin: "0"
        },
        li: {
            padding: "8px",
            borderBottom: "1px solid #eee",
            display: "flex",
            alignItems: "center",
            gap: "10px"
        },
        total: {
            fontSize: "18px",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "10px"
        },
         deleteButton: {
            padding: "6px 12px",
            borderRadius: "5px",
            background: "#ae2709ff",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            width: "90px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }
    };

    let f1 = (event) => { SetId(event.target.value); }
    let f2 = (event) => { SetDes(event.target.value); }
    let f3 = (event) => { SetPrice(event.target.value); }

    const AddToList = () => {
        if (Id && Des && Price) {
            SetList([...List, {
                id: Id,
                des: Des,
                price: Number(Price) 
            }]);
            
            SetId("");
            SetDes("");
            SetPrice("");
        }
    }

    const Calculate = () => {
        const sum = List.reduce((acc, item) => acc + item.price, 0);
        SetTotal(sum);
    }
    const deleteItem = (idsupp) => {
        
        const updatedList = List.filter((a, i) => a.id !== idsupp);
        SetList(updatedList);
    }

    return (
        <div>
            <form style={elmStyl.form}>
                <label style={elmStyl.label}>
                    ID
                    <input 
                        type="text" 
                        value={Id} 
                        onChange={f1} 
                        style={elmStyl.input}
                    />
                </label>
                
                <label style={elmStyl.label}>
                    Designation
                    <input 
                        type="text" 
                        value={Des} 
                        onChange={f2} 
                        style={elmStyl.input}
                    />
                </label>
                
                <label style={elmStyl.label}>
                    Prix
                    <input 
                        type="text" 
                        value={Price} 
                        onChange={f3} 
                        style={elmStyl.input}
                    />
                </label>
                
                <button type="button" onClick={AddToList} style={elmStyl.button}>
                    Ajouter
                </button>

                <ul style={elmStyl.ul}>
                    {List.map((item, index) => (
                        <li key={index} style={elmStyl.li}>
                            <button type="button" onClick={() => deleteItem(item.id)} 
                                style={elmStyl.deleteButton} >
                                supprimer
                            </button>
                            {item.id} | {item.des} | {item.price} $
                        </li>
                    ))}
                </ul>

                <button type="button" onClick={Calculate} style={elmStyl.button}>
                    Calculer Total
                </button>
                
                <div style={elmStyl.total}>Total: {Total} $</div>
            </form>
        </div>
    );
}