import React, { useState, useEffect } from 'react';
import api from './services/api'
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

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
  const [github_username, setGithubUsername] = useState('')
  const [techs, setTechs] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords

        setLatitude(latitude)
        setLongitude(longitude)

      }, 
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000
      }
    )
  }, [])


  async function handleAddDev(e) {
    e.preventDefault()
    
    const response = await api.post('/devs', {
      github_username, 
      techs,
      latitude,
      longitude
    })

    console.log(response.data)
  }

  return (

    <div id = "app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit = {handleAddDev}>
          <div className = "input_block">
            <label htmlFor = "github_username">Usuário do Github</label>
            <input 
              name = "github_username" 
              id = "github_username" 
              required 
              value = {github_username}
              onChange = {e => setGithubUsername(e.target.value)}  
            />
          </div>

          <div className = "input_block">
            <label htmlFor = "techs">Tecnologias</label>
            <input 
              name = "techs" 
              id = "techs" 
              required 
              value = {techs}
              onChange = {e => setTechs(e.target.value)}
              />
          </div>

          <div className = "input_group">
            <div className = "input_block">
              <label htmlFor = "lat">Latitude</label>
              <input 
                type = "number" 
                name = "lat" 
                id = "lat" 
                required 
                value = {latitude} 
                onChange = {e => setLatitude(e.target.value)}
              />
            </div>

            <div className = "input_block">
              <label htmlFor = "long">Longitude</label>
              <input 
                type = "number" 
                name = "long" 
                id = "long" 
                required 
                value = {longitude} 
                onChange = {e => setLongitude(e.target.value)}              
              />
            </div>
          </div>       

          <button type = "submit">Salvar</button>

        </form>
      </aside>

      <main>
        <ul>
          <li className = "dev-item">
            <header>
              <img src = "https://avatars0.githubusercontent.com/u/30672749?s=460&v=4" alt = "Felipe Andrioli" />
              <div className = "user-info">
                <strong>Felipe Andrioli</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Teste de biografia já que não tenho uma no github</p>
            <a href = "https://github.com/FelipeAndrioli">Acessar perfil Github</a>
          </li>

          <li className = "dev-item">
            <header>
              <img src = "https://avatars0.githubusercontent.com/u/30672749?s=460&v=4" alt = "Felipe Andrioli" />
              <div className = "user-info">
                <strong>Felipe Andrioli</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Teste de biografia já que não tenho uma no github</p>
            <a href = "https://github.com/FelipeAndrioli">Acessar perfil Github</a>
          </li>

          <li className = "dev-item">
            <header>
              <img src = "https://avatars0.githubusercontent.com/u/30672749?s=460&v=4" alt = "Felipe Andrioli" />
              <div className = "user-info">
                <strong>Felipe Andrioli</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Teste de biografia já que não tenho uma no github</p>
            <a href = "https://github.com/FelipeAndrioli">Acessar perfil Github</a>
          </li>

          <li className = "dev-item">
            <header>
              <img src = "https://avatars0.githubusercontent.com/u/30672749?s=460&v=4" alt = "Felipe Andrioli" />
              <div className = "user-info">
                <strong>Felipe Andrioli</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Teste de biografia já que não tenho uma no github</p>
            <a href = "https://github.com/FelipeAndrioli">Acessar perfil Github</a>
          </li>
        </ul>
      </main>
    </div>

  )
}

export default App;
