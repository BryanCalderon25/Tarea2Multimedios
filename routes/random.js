// random.js - Ruta GET /random
// Devuelve un mundial aleatorio usando SQL

import { getRandom } from "../data/mundiales.js";

export function randomRoute(req, res) {
  // Obtener un mundial aleatorio de la base de datos
  const mundial = getRandom();

  // Devolver el mundial aleatorio
  res.json(mundial);
}
