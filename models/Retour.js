const mongoose = require('mongoose');

const retourSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true },
  commentaire: { type: String, required: true },
  vote: { type: Number, default: 0 }
});

module.exports = mongoose.model('Retour', retourSchema);