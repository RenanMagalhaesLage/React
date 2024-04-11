import './MyForm.css';
import { useState } from 'react';

const MyForm = ({user}) => {
    // Gerenciamento de dados
    const [name, setName] = useState(user ? user.name: ''); //Caso estiver vindo valores do back end para ditar usar o if se não usar "" para representar vazio
    const [email, setEmail] = useState(user ? user.email: '');
    const [bio, setBio] = useState(user ? user.bio: '');
    const [role, setRole] = useState(user ? user.role: '');


    const handleName = (e) =>{
        console.log("Mudou o nome");
        console.log(e.target.value);
        setName(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Enviando Form");
        console.log("o nome atual é = ", name);
        console.log("o email é = ", email);
        console.log("bio = ", bio);
        console.log("role = ", role);


        {/* 7 --> Limpar Formulário */}
        setName("");
        setEmail("");
        setBio("");
    }

    //console.log("o nome atual é = ", name);
    //console.log("o email é = ", email);


  return (
    <div>
        {/* 1 --> Criação de Formulário */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                {/* 4 --> Para formulários de edição usar o atributo VALUE nos inputs */}
                <input type="text" name='name' placeholder='Digite o seu nome' onChange={handleName} value={name}/>
            </div>
            {/* 2 --> Label envolvendo input */}
            <label >
                <span>E-mail:</span>
                <input type="email" name='email' placeholder='digite o seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            {/* TEXTAREA */}
            <label >
                <span>Bio:</span>
                <textarea name="bio" placeholder='Descrição do usuário' onChange={(e)=> setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/* SELECT */}
            <label>
                <span>Função:</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            {/* 3 --> Manipulação de Valores */}
            <input type='submit' value="Enviar"></input>
        </form>
    </div>
  )
}

export default MyForm