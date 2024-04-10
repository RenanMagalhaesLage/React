import {useState} from "react";


const ManageData = () => {
    let valor = 10;
    const [number, setNumber] = useState(15); //Criando um Hook --> usando useState
    const [list] = useState(["Cãobabi", "CriançaLeo", "Reinan"])
    const [users, setUsers] = useState([
        {id: 1, name: "João", age: 44},
        {id: 2, name: "Maria", age: 32},
        {id: 3, name: "José", age: 29},
    ])

    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random() * 4);
        setUsers((prevUsers)=>{
            return prevUsers.filter((user)=> randomNumber !== user.id);
        })
    }

    return (
        <div>
            <div>
                <p>Valor: {valor}</p>
                <button onClick={() => (valor = 15)}>Mudar o valor</button>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(25)}>Mudar o valor</button>
            </div>
            {/*Trabalhando com listas */}
            <div>
                <ul>
                    {list.map((item, i)=>( //i é um indice 
                        <li>{item}</li>
                    ))}
                </ul>
                <ul>
                    {users.map((user)=>( 
                        <li key={user.id}>{user.name} - {user.age}</li>
                    ))}
                </ul>
            </div>
            {/*Previous State */}
            <div>
                <button onClick={deleteRandom}>Delete um user aleatoriamente</button>
            </div>
        </div>
        
    );
};

export default ManageData;
