# API Mundial FIFA

API REST sobre la Copa Mundial de la FIFA construida con Node.js, Express y SQLite.

## Instalacion

```bash
pnpm install
```

## Crear la base de datos

```bash
node data/createdb.js
```

O usar el script:

```bash
pnpm createdb
```

## Ejecutar el servidor

```bash
pnpm dev
```

El servidor inicia en `http://localhost:4321`

## Probar la API

```bash
# Informacion de la API
xh GET :4321/

# Listar slugs de mundiales
xh GET :4321/mundiales

# Listar mundiales con info completa
xh GET :4321/mundiales include==full

# Buscar mundial por slug
xh GET :4321/mundial/qatar-2022

# Mundiales ganados por un pais
xh GET :4321/campeon/Argentina

# Mundial aleatorio
xh GET :4321/random

# Buscar por texto
xh GET :4321/search/argentina
```

## Rutas disponibles

| Metodo | Ruta               | Descripcion                          |
| ------ | ------------------ | ------------------------------------ |
| GET    | `/`                | Informacion de la API                |
| GET    | `/mundiales`       | Slugs o info completa con `?include=full` |
| GET    | `/mundial/:slug`   | Buscar mundial por slug              |
| GET    | `/campeon/:pais`   | Slugs ganados por un pais            |
| GET    | `/random`          | Mundial aleatorio                    |
| GET    | `/search/:text`    | Buscar por texto en varios campos    |
| GET    | `/imagenes/*`      | Imagenes estaticas                   |

## Tecnologias

- Node.js (ES Modules)
- Express
- SQLite (node:sqlite)
- Zod
- dotenv
