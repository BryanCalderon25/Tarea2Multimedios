// getBySlug.js - Ruta GET /mundial/:slug
// Busca un mundial por su slug

import { getBySlug } from "../data/mundiales.js";

export function getBySlugRoute(req, res) {
  // Obtener el slug de los parámetros
  const { slug } = req.params;

  // Buscar el mundial en la base de datos
  const mundial = getBySlug(slug);

  // Si no existe, devolver 404
  if (!mundial) {
    return res.status(404).json({ error: "Mundial no encontrado" });
  }

  // Devolver el mundial encontrado
  res.json(mundial);
}
