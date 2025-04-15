const express = require("express");
const Property = require("./../Models/PropertiesModel.js");
const {
  searchProperties,
  getPropertyById,
} = require("../Controllers/PropertiesController");

const router = express.Router();

// Route pour la recherche (placée avant /:id)
router.get("/search", searchProperties);

// Ajouter une nouvelle propriété
router.post("/", async (req, res) => {
  const newProperty = new Property(req.body);
  await newProperty.save();
  res.status(201).json({ message: "Property added ✅", property: newProperty });
});

// Obtenir toutes les propriétés
router.get("/", async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
});

// Obtenir une propriété par ID (placée après /search)
router.get("/:id", getPropertyById);

// Mettre à jour une propriété
router.put("/:id", async (req, res) => {
  const updatedProperty = await Property.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json({ message: "Property updated ✅", property: updatedProperty });
});

// Supprimer une propriété
router.delete("/:id", async (req, res) => {
  await Property.findByIdAndDelete(req.params.id);
  res.json({ message: "Property deleted ✅" });
});

module.exports = router;
