// npm run dev 
// para lanzar el server

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const sequelize = require('./src/config/database');

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000'
}));

// Importar rutas
const authRoutes = require('./src/routers/authRoutes');
const userRoutes = require('./src/routers/userRoutes');

// Definir rutas base
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync({alter:true})
  .then(() => {
    console.log('Conexión a la base de datos establecida');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });
