// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Servir archivos estáticos (HTML, CSS, JS, audio)
app.use(express.static(__dirname));

// Endpoint para obtener lista de audios
app.get('/playlist', (req, res) => {
  const audioFolder = path.join(__dirname, 'assets/audio');
  fs.readdir(audioFolder, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'No se pudo leer la carpeta de audio' });
    }
    const audios = files.filter(f => f.endsWith('.mp3') || f.endsWith('.wav'));
    res.json(audios);
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
