const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')
const routes = Router()

//principais métodos HTTP: GET, POST, PUT, DELETE

/*
Tipos de parâmetros: 

- Query params: request.query (Filtros, Ordenação, Páginação, ...)

- Route params: request.params (Identificar um recurso na alteração ou remoção)

- Body: request.body (Dados para criação ou alteração de um registro)

*/

//Bando de Dados a ser utilizado: MongoDB (Banco de Dados Não Relacional)
//async quer dizer que a rota da API do Github pode demorar a responder

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)
routes.get('/search', SearchController.index)

module.exports = routes