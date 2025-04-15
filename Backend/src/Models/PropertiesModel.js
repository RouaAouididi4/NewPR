const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    address: { type: String, required: true },
    zip: { type: String, required: false },
    propertyID: { type: String, unique: true, required: true },
    type: { type: String, enum: ["rent", "sale"], required: true },
    city: { type: String, required: true },
    bedrooms: { type: Number, required: false },
    bathrooms: { type: Number, required: false },
    price: { type: Number, required: true },
    size: { type: Number, required: false },
    status: {
      type: String,
      enum: ["en attente", "en ligne", "en gestion"],
      default: "en attente",
    },
    gestion: {
      type: String,
      enum: ["unmanaged", "managed"],
      default: "unmanaged",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", propertySchema);
