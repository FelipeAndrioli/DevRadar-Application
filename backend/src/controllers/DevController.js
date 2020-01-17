const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

/*

Funções do controller: 

index => mostra lista 

show => mostra um único registro

store => Cria um novo registro

update => Atualiza um registro existente

destroy => Deleta um único registro

*/

module.exports = {

    async index (request, response) {
        const devs = await Dev.find()

        return response.json(devs)
    },

    async store (request, response) {
        //console.log(request.query)
        //console.log(request.params)
        //console.log(request.body) 
        const { github_username, techs, latitude, longitude } = request.body
        let dev = await Dev.findOne({ github_username })

        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
            const { name = login , avatar_url, bio } = apiResponse.data
            const techsArray = parseStringAsArray(techs)
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        }
        return response.json(dev)
    },

/*
    async delete (request, response) { 

    },

    async update (request, response) {

    },
*/
}