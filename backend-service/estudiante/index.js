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
    database: 'db_estudiantes',
    port: 5001
});

// CREATE 
app.post('/estudiante', (req, res) => {
    const { nombre, email, carrera_id } = req.body;
    db.query('INSERT INTO estudiante (nombre, email, carrera_id) VALUES (?, ?, ?)', [nombre, email, carrera_id], (err, result) => {
        if (err) return res.json(err);
        res.json(result);
    });
});

// READ 
app.get('/estudiante', (req, res) => {
    db.query('SELECT * FROM estudiante', (err, result) => {
        if (err) return res.json(err);
        res.json(result);
    });
});

// UPDATE 
app.put('/estudiante/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, email, carrera_id } = req.body;
    db.query('UPDATE estudiante SET nombre = ?, email = ?, carrera_id = ? WHERE id = ?', [nombre, email, carrera_id, id], (err, result) => {
        if (err) return res.json(err);
        res.json(result);
    });
});

// DELETE 
app.delete('/estudiante/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM estudiante WHERE id = ?', [id], (err, result) => {
        if (err) return res.json(err);
        res.json(result);
    });
});

app.listen(3002, () => {
    console.log('Servidor corriendo en puerto 3002');
});