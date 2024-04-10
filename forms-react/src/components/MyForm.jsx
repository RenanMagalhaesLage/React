import './MyForm.css';
import { useState } from 'react';

const MyForm = () => {
    // Gerenciamento de dados
    const [name, setName] = useState();
    const [email, setemail] = useState();

    const handleName = (e) =>{
        console.log("Mudou o nome");
        console.log(e.target.value);
        setName(e.target.value)
    }

    console.log("o nome atual é = ", name);

  return (
    <div>
        {/* 1 --> Criação de Formulário */}
        <form >
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder='Digite o seu nome' onChange={handleName}/>
            </div>
            {/* 2 --> Label envolvendo input */}
            <label >
                <span>E-mail:</span>
                <input type="email" name='email' placeholder='digite o seu e-mail'/>
            </label>
            {/* 3 --> Manipulação de Valores */}
            <input type='submit' value="Enviar"></input>
        </form>
    </div>
  )
}

export default MyForm