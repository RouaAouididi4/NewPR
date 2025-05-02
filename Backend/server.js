const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const { errorHandler } = require("./src/middleware/errorMiddleware");
const app = express();

// Routes
const PropertiesRoutes = require("./src/Routes/PropertiesRoutes");
const MeetingRoutes = require("./src/Routes/MeetingRoutes");
const UserRoutes = require("./src/Routes/UserRoutes");
const AuthRoutes = require("./src/Routes/AuthRoutes");

dotenv.config();

// Initialisation de l'application Express

// Middlewares de sécurité
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
  })
);

// Limite les requêtes à 100/heure par IP
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 100,
  message: "Trop de requêtes depuis cette IP, veuillez réessayer plus tard",
});
app.use("/api", limiter);

app.use(express.json({ limit: "10kb" }));
app.use(mongoSanitize());

// Serve les fichiers statiques
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connexion MongoDB avec gestion améliorée des erreurs
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected Successfully");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  }
};
connectDB();

// Routes avec middleware d'authentification
app.use("/api/auth", AuthRoutes);
app.use("/api/properties", PropertiesRoutes);
app.use("/api/meetings", MeetingRoutes);
app.use("/api/users", UserRoutes);

// Gestion centralisée des erreurs
app.use(errorHandler);

// Route 404
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route non trouvée" });
});

// Démarrage du serveur
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(
    `🚀 Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`
  );
});
