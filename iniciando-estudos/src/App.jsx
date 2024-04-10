import { useState } from 'react'
import './App.css'

/* Componentes */
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'
import ManageData from './components/ManageData'
import Condicional from './components/Condicional'
import PropsShowUserName from './components/PropsShowUserName'
import DestructuringCarDetails from './components/DestructuringCarDetails'
import ExecuteFunction from './components/ExecuteFunction'


/*Imagens em assets */
import Sky from './assets/ceu.jpg'

function App() {
  const cars=[
    {id:1, brand:"Fiat", color: "Vermelho", km:20},
    {id:2, brand:"Ford", color: "Rosa", km:4000},
    {id:3, brand:"Ferrari", color: "Preto", km:0}
  ]

  function showMessage(){
    console.log("Evento do componente pai");
  }


  return (
    <>
      <FirstComponent></FirstComponent>
      <TemplateExpressions></TemplateExpressions>
      <Events/>
      {/* Quando a imagem está em public */}
      <img src="/Paisagem.jpg" alt="Paisagem" />

      {/* Quando a imagem está em assets */}
      <img src={Sky} alt="Céu" width={700}/>
      < ManageData/>
      <hr />
      < Condicional/>
      < PropsShowUserName name="Mariane"/>
      <hr />
      <DestructuringCarDetails brand="Fiat" km={100} color="Azul"/>
      {/* LOOP */}
      <hr />
      {cars.map((car) =>(
        <DestructuringCarDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>
      ))}
      {/*Executar função */}
      <ExecuteFunction myFunction={showMessage}/>
    </>
  )
}

export default App
