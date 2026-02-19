

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Método 1: Servir un archivo específico
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // [5, 10]
});

// Método 2: Servir una carpeta de archivos estáticos (opcional, mejor para imágenes/css)
// app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
