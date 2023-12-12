import mongoose from "mongoose";

const filmSchema = mongoose.Schema({
  title: { type: String, required: true, min: 3 },
  rating: { type: Number, required: true },
  description: { type: String, required: true },
  imdbLink: { type: String, required: true },
});

export default mongoose.model("film", filmSchema);
