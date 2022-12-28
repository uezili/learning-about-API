const express = require('express');

const app = express();
const data = require("./data.json")

// verbos HTTP
// GEt: Receber dados de um Resource.
// POST: Enviar dados ou informações para serem processados por um Resource.
// PUT: Atualizar dados de urrl Resource.
// DELETE: Deletar um Resource.

// ----------------------/ENDPOINT
// http://localhost:3000/clients
// -------------URI------------



app.listen(3000, function () {
	console.log('Server is running!');
});
