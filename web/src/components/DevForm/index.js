import React, { useEffect, useState } from 'react'
import './styles.css'

function DevForm({ onSubmit }) {

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


    async function handleSubmit(e) {
        e.preventDefault()
        
        await onSubmit({
            github_username, 
            techs,
            latitude,
            longitude
          })

          setGithubUsername('')
          setTechs('')
    }

    return(
        <form onSubmit = {handleSubmit}>
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
    )
}

export default DevForm