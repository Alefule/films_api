const express = require('express');
const app = express();

const users = [{id: 1 , name:'pepe'},{id: 2, name:'juan'}];

app.get('/users', (req,res) => {
	console.log('Request:', req);
	res.json(users);
});

app.get('/users/:id', (req, res) => {
	const usersId = req.params.id;
	const selectedUser = users.find(user => user.id == usersId);
	res.json(selectedUser);
});

app.listen(3000, () => console.log('Ready on port 3000!'));


