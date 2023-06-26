const express = require('express');

const app = express();

app.use(express.json());

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

app.get('/', (request, response) => response.status(200).json({ message: 'Olá mundo' }));

app.get('/teams', (request, response) => response.status(200).json({ teams }));

app.post('/teams', (request, response) => {
  const newTeam = { ...request.body };
  teams.push(newTeam);

  response.status(201).json({ team: newTeam });
});

module.exports = {
  app,
};