const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

const usersRouter = require('../routes/usersRoutes');
const loginRouter = require('../routes/loginRoute');
const recipesRouter = require('../routes/recipesRouters');

app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/recipes', recipesRouter);
app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (_request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;
