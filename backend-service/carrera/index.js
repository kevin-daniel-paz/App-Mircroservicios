const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')


const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kevinpaz',
    database: 'db_carreras',
    port: 5001
});

// CREATE
app.post('/carrera', (req, res) => {
    const { nombre, duracion } = req.body;
    db.query('INSERT INTO carrera (nombre, duracion) VALUES (?, ?)', [nombre, duracion], (err, result) => {
        if (err) return res.json(err);
        res.json(result);
    });
});

// READ
app.get('/carrera', (req, res) => {
    db.query('SELECT * FROM carrera', (err, result) => {
        if (err) return res.json(err);
        res.json(result);
    });
});

// UPDATE
app.put('/carrera/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, duracion } = req.body;
    db.query('UPDATE carrera SET nombre = ?, email = ? WHERE id = ?', [nombre, duracion, id], (err, result) => {
        if (err) return res.json(err);
        res.json(result);
    });
});

// DELETE
app.delete('/carrera/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM carrera WHERE id = ?', [id], (err, result) => {
        if (err) return res.json(err);
        res.json(result);
    });
});

app.listen(3001, () => {
    console.log('Servidor corriendo en puerto 3001');
});