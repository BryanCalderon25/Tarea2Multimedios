// createdb.js - Script para crear la base de datos SQLite
// Lee el JSON y lo inserta en la tabla mundiales
// Ejecutar con: node data/createdb.js

import { DatabaseSync } from "node:sqlite";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Obtener la ruta del directorio actual
const __dirname = dirname(fileURLToPath(import.meta.url));

// Rutas de los archivos
const dbPath = join(__dirname, "mundiales.db");
const sqlPath = join(__dirname, "CREATE.sql");
const jsonPath = join(__dirname, "mundiales.json");

// Leer el script SQL y los datos JSON
const createSQL = readFileSync(sqlPath, "utf-8");
const mundiales = JSON.parse(readFileSync(jsonPath, "utf-8"));

// Crear la base de datos
const db = new DatabaseSync(dbPath);

// Ejecutar el script de creación de tabla
db.exec(createSQL);

console.log("Tabla 'mundiales' creada correctamente.");

// Preparar la sentencia de inserción con parámetros
const insert = db.prepare(`
  INSERT INTO mundiales (nombre, anio, sede, campeon, subcampeon, goleador, equipos, imagen, slug, resumen, descripcion)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

// Insertar cada mundial usando parámetros preparados
for (const m of mundiales) {
  insert.run(
    m.nombre,
    m.anio,
    m.sede,
    m.campeon,
    m.subcampeon,
    m.goleador,
    m.equipos,
    m.imagen,
    m.slug,
    m.resumen,
    m.descripcion
  );
  console.log(`Insertado: ${m.nombre}`);
}

// Cerrar la base de datos
db.close();
console.log("Base de datos creada exitosamente en:", dbPath);
