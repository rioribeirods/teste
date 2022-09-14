import React, { useState } from 'react';
import { useEffect } from 'react';
import "./App.css"

function App() {
  const [texto, setTexto] = useState([])

  function handleText() {

    const funciona = () => texto.length < 4 ? setTexto([...texto, { name: "Amanda" }]) : setTexto([...texto, { name: "Foi mal, só encontramos ela no banco de dados" }])
    funciona()
  }

  
  return (
    <>
      <button className='button' onClick={handleText}>Adicionar pessoa aleatória ao coração de Rio</button>
      <ul>
        {texto.map((txt) => (<li key={txt.id}>{txt.name}</li>))}
      </ul>
    </>
  )
}

export default App
