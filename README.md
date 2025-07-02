# Payload CMS Starter Template

Este proyecto proporciona una base mínima y flexible para comenzar rápidamente con Payload CMS, permitiéndote personalizar y escalar tu aplicación según tus necesidades.

## 🚀 Inicio Rápido

### 1. Clona el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd <nombre-del-proyecto>
```

### 2. Configura las variables de entorno

Copia el archivo de ejemplo y edítalo según tu configuración:

```bash
cp .env.example .env
```

Asegúrate de completar los valores necesarios, especialmente `MONGODB_URI` para la base de datos.

### 3. Instala las dependencias

```bash
pnpm install
```

### 4. Inicia el servidor de desarrollo

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para acceder a la app y al panel de administración.

## 🐳 Uso con Docker (opcional)

1. Asegúrate de tener Docker instalado.
2. Ajusta `MONGODB_URI` en tu `.env` a `mongodb://127.0.0.1/<nombre_db>`.
3. Ejecuta:

```bash
docker-compose up
```

Esto levantará MongoDB y la app en contenedores.

## 📁 Estructura del Proyecto

- `src/collections/` — Colecciones de Payload (ej: Usuarios, Media, y ejemplos)
- `src/globals/` — Globales de Payload de ejemplo
- `src/access/` — Sistema de roles y control de acceso
- `src/app/` — Rutas y vistas de la aplicación (Next.js)
- `src/payload.config.ts` — Configuración principal de Payload CMS

## 📝 Notas

- Modifica y extiende las colecciones según tus necesidades en `src/collections/`.
- Consulta la [documentación oficial de Payload CMS](https://payloadcms.com/docs) para más detalles.

## ❓ Soporte

Payload CMS tiene una gran comunidad dispuesta a ayudarte en [Discord](https://discord.com/invite/payload). También puedes abrir una discusión en [GitHub](https://github.com/payloadcms/payload/discussions).
