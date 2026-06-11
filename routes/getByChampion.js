// getByChampion.js - Ruta GET /campeon/:pais
// Devuelve los slugs de los mundiales ganados por un país

import { getByChampion } from "../data/mundiales.js";

export function getByChampionRoute(req, res) {
  // Obtener el país de los parámetros
  const { pais } = req.params;

  // Buscar mundiales ganados por ese país
  const mundiales = getByChampion(pais);

  // Extraer solo los slugs
  const slugs = mundiales.map((m) => m.slug);

  // Devolver los slugs (puede ser un arreglo vacío)
  res.json(slugs);
}
