const express = require('express');
const app = express();

app.get('/users', (request, response) => {
  
  const nome = request.query;
  console.log(nome);

  const teste = '{ teste: ' + "'" + 'aaa' + "'" + ' }';
  console.log(teste);

  {nome === teste ? console.log(' foi') : console.log(nome, 'nao foi')}
  // {nome == '{ teste: ' + "'" + 'Leo' + "'" + ' }' ? console.log(' foi') : console.log(nome, 'nao foi')}

  
});

app.listen(3333);