const mongoose = require('mongoose');

var editeurSchema = mongoose.Schema(
  {
    maisonedit: String,
    siteweb: String,
    email: String
  },
  {
    timestamps: true
  }
)

const Editeur = mongoose.models.Editeur || mongoose.model('Editeur', editeurSchema);

export default Editeur;
