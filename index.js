// index.js - Archivo principal del servidor
// Configura Express, carga rutas y archivos estáticos

import "dotenv/config";
import express from "express";

// Importar las rutas
import { getAllRoute } from "./routes/getAll.js";
import { getBySlugRoute } from "./routes/getBySlug.js";
import { getByChampionRoute } from "./routes/getByChampion.js";
import { randomRoute } from "./routes/random.js";
import { searchRoute } from "./routes/search.js";

// Crear la aplicación Express
const app = express();

// Puerto desde variables de entorno
const PORT = process.env.PORT || 4321;

// Servir archivos estáticos desde /public
// Esto permite acceder a /imagenes/* directamente
app.use(express.static("public"));

// ---- Ruta principal ----
app.get("/", (req, res) => {
  res.json({
    api: "API Mundial FIFA",
    version: "1.0",
    autor: "Estudiante",
  });
});

// ---- Registrar rutas ----
app.get("/mundiales", getAllRoute);
app.get("/mundial/:slug", getBySlugRoute);
app.get("/campeon/:pais", getByChampionRoute);
app.get("/random", randomRoute);
app.get("/search/:text", searchRoute);

// ---- Catch-all: ruta no encontrada ----
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// ---- Iniciar el servidor ----
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
