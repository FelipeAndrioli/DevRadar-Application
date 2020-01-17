import React, { useState, useEffect } from 'react';
import api from './services/api'
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import DevItem from './components/DevItem/index.js'
import DevForm from './components/DevForm/index.js'
/**
 * 
 * 3 conceitos principais do ReactJS
 * 
 * - Componente => Bloco isolado de HTML, CSS ou Javascript, o qual não interfere no restante da aplicação
 * 
 * - Estado => Informações mantidas pelo componente (Lembrar: Imutabilidade)
 * 
 * - Propriedade => Informações que um componente pai passa para o componente filho
 */

function App() {

 
  const [devs, setDevs] = useState([])

  useEffect(() => {
    async function loadDevs() {
      const apiResponse = await api.get('/devs')
      
      setDevs(apiResponse.data)
    }

    loadDevs()

  }, [])

  async function handleAddDev(data) {
    
    const response = await api.post('/devs', data)

    setDevs([...devs, response.data])
  }

  return (

    <div id = "app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit = {handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key = {dev._id} dev = {dev} />
          ))}

        </ul>
      </main>
    </div>

  )
}

export default App;
