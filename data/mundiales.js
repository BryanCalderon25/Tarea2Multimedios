// mundiales.js - Funciones de acceso a datos
// Todas las consultas usan db.prepare() con SQLite nativo

import { DatabaseSync } from "node:sqlite";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Obtener la ruta del directorio actual
const __dirname = dirname(fileURLToPath(import.meta.url));

// Abrir la base de datos
const db = new DatabaseSync(join(__dirname, "mundiales.db"));

// Obtener todos los mundiales
export function getAll() {
  const stmt = db.prepare("SELECT * FROM mundiales ORDER BY anio DESC");
  return stmt.all();
}

// Buscar un mundial por slug
export function getBySlug(slug) {
  const stmt = db.prepare("SELECT * FROM mundiales WHERE slug = ?");
  return stmt.get(slug);
}

// Buscar mundiales ganados por un país
export function getByChampion(pais) {
  const stmt = db.prepare("SELECT slug FROM mundiales WHERE campeon = ?");
  return stmt.all(pais);
}

// Obtener un mundial aleatorio
export function getRandom() {
  const stmt = db.prepare(
    "SELECT * FROM mundiales ORDER BY RANDOM() LIMIT 1"
  );
  return stmt.get();
}

// Buscar por texto en varios campos usando LIKE
export function search(text) {
  const stmt = db.prepare(`
    SELECT slug FROM mundiales
    WHERE nombre LIKE ?
       OR resumen LIKE ?
       OR descripcion LIKE ?
       OR campeon LIKE ?
       OR subcampeon LIKE ?
       OR goleador LIKE ?
       OR sede LIKE ?
  `);

  // Agregar comodines para LIKE
  const term = `%${text}%`;
  return stmt.all(term, term, term, term, term, term, term);
}
