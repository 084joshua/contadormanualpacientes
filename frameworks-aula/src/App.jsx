import { useState } from 'react'
import Logo from '/logoo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  
  function reiniciar() {
    setCount(0)
  }

  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={Logo} className="logo" alt="Logo Contador"/>
        </a>
      </div>
      <h1>Contador De Pacientes</h1>
      <h3>Contador manual de pacientes</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Paciente = {count}
        </button>
          <button onClick={reiniciar} className="btn-reiniciar">
          Reiniciar
        </button>
      </div>
      <p className="read-the-docs">
        © LopesClinic. Todos os direitos reservados
.      </p>
    </>
  )
}

export default App
