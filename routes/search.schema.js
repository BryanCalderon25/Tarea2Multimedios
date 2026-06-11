// search.schema.js - Esquema de validación con Zod
// Valida el texto de búsqueda usando z.object como en clase

import { z } from "zod";

// Esquema para validar los parámetros de búsqueda
const schema = z.object({
  text: z
    .string()
    .trim()
    .min(3, "Debe tener al menos 3 caracteres")
    .max(50, "Debe tener como maximo 50 caracteres")
    .transform((value) => value.toLowerCase()),
});

export default schema;
