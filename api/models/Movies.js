const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSm: { type: String },
    video: { type: String },
    year: { type: String },
    limit: { type: Number },
    gerne: { type: String },
    isSerie: { type: Boolean },
    isSeries: { type: Boolean },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Movie', MovieSchema);
