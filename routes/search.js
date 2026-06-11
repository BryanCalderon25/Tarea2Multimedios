// search.js - Ruta GET /search/:text
// Busca mundiales por texto con validación Zod

import { search } from "../data/mundiales.js";
import schema from "./search.schema.js";

const DEFAULT = "Busqueda invalida";

export const searchRoute = (req, res) => {
  // Validar los parámetros con Zod (como en las diapositivas)
  const parsed = schema.safeParse(req.params);

  // Si la validación falla, devolver 400 con el error
  if (!parsed.success) {
    const error = parsed.error.issues[0].message ?? DEFAULT;
    return res.status(400).json({ error });
  }

  // Obtener el texto validado y transformado
  const query = parsed.data.text;

  // Buscar mundiales con el texto validado
  const mundiales = search(query);

  // Extraer solo los slugs
  const slugs = mundiales.map((m) => m.slug);

  // Devolver los slugs encontrados
  res.json(slugs);
};
