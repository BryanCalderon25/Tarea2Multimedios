// getAll.js - Ruta GET /mundiales
// Devuelve slugs por defecto, o info completa con ?include=full

import { getAll } from "../data/mundiales.js";

export function getAllRoute(req, res) {
  // Obtener todos los mundiales de la base de datos
  const mundiales = getAll();

  // Si se pide la info completa, devolver todo
  if (req.query.include === "full") {
    return res.json(mundiales);
  }

  // Por defecto, devolver solo los slugs
  const slugs = mundiales.map((m) => m.slug);
  res.json(slugs);
}
