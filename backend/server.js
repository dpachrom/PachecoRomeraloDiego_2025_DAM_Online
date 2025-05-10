require('dotenv').config();

const express = require('express');
const cors = require('cors');
const sequelize = require('./src/config/database');

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000'
}));

// Routes import
const authRoutes = require('./src/routers/authRoutes');
const userRoutes = require('./src/routers/userRoutes');
const taskRoutes = require('./src/routers/taskRoutes');

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync({alter:true})
  .then(() => {
    console.log('Database connected successfully');
    app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database connection error :', err);
  });
