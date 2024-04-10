import { useState } from "react"

const Condicional = () => {
    const [x] = useState(true);
    const [name, setName] = useState("Maria");


  return (
    <div>
        <h2>Condicional em React</h2>
        {x && <p> x = verdadeiro</p>}
        {/* If else = if ternário --> condição ? bloco1 : bloco2 */}
        {name === "João" ? (
            <p>O nome é igual a João</p>
        ) : (
            <p>O nome <b>NÃO</b> é igual a João</p>
        )}
        <p>O nome atual é = {name}</p>
        <button onClick={() => setName("Matheus")}>Mude o nome !</button>
    </div>
  )
}

export default Condicional