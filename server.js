const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse application/json

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/recueilRetours', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connecté'))
  .catch(err => console.error('Erreur de connexion MongoDB:', err)); // Log connection error

// Routes
app.get('/', (req, res) => {
  res.send('Bienvenue sur le recueil de retours utilisateurs!'); // Welcome message
});

// Start the server
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`); // Log server status
});