const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const swaggerUi = require("swagger-ui-express"); 
const swaggerSpecs = require("./swagger/swagger");
dotenv.config();


const app = express();
const port = process.env.PORT || 3000;


// Middleware
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");
// Middleware pour parser les requêtes POST (body)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger);

// Configuration des vues EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Fichiers statiques (optionnel)
app.use(express.static(path.join(__dirname, "public")));

// Connexion à MongoDB
connectDB();
// --- Swagger UI ---
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Chargement des routes
const routes = require("./routes/routes");
app.use("/", routes);
const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);
const productRoutes = require("./routes/productRoutes");
app.use("/product", productRoutes);

// Gestion des erreurs 404

app.use(notFound);

// Error-handling middleware
app.use(errorHandler);

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
