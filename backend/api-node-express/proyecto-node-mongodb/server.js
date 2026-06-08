const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const conectarDB = require('./config/database');
const cursoRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10kb'}));


// Conectar a la base de datos

async function iniciarServidor() {

    await conectarDB();

    app.use('/api', cursoRoutes);

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    })
}

iniciarServidor(); 

