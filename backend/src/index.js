const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 esta função cria uma rota - essa rota é o "index"
 exemplo rota contato .get('/contato')
 Rotas /- Recurso (o que vem depois da barra)
*/

/** 
 Metodos HTTP

 GET -> BUSCAR ALGUMA INFORMACAO

 listagem, dados de usuario, qlq linguagem

 POST -> CRIAR UMA INFORMAÇÃO NO BACK-END
 (ENVIAR OS DADOS DE UM FORMULARIO)

 PUT -> ALTERAR UMA INFORMACAO NO BACK=END
 
 DELETE -> DELETA UMA INFORMACAO NO BACK-END
*/

/** TIPOS DE PARAMETROS
 
 QUERY PARAMS- parametros nomeados enviados na rota apos o simbolo de '?' e 
 geralmente serve para paginacao, filtro

 ROUTE PARAMS - parametros utilizados para identificar recursos

 REQUEST BODY - corpo da requisição, utilizado para criar ou alterar recursos

 */

/*
  SQL MYSQL SQL LITE ORACLE POSTGREE MICROSOFT SQL SERVER
  NOSQL MONGODB
*/

/** 
 DRIVER: SELECT * FROM USERS
 QUERY BUILDER table('users').select ('*').where()
*/




app.listen(3333);

