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

## ⚙️ Variables de entorno requeridas

Para que la aplicación funcione correctamente, debes definir las siguientes variables en tu archivo `.env`:

- `MONGODB_URI`: URL de conexión a tu base de datos MongoDB (obligatoria).
- `PAYLOAD_SECRET`: Clave secreta para Payload (obligatoria).
- `NEXT_PUBLIC_SERVER_URL`: URL pública de tu servidor (opcional, pero recomendada para despliegues).

### Variables SMTP (opcional)

Si deseas habilitar el envío de correos electrónicos (por ejemplo, para recuperación de contraseña), debes descomentar la configuración de nodemailer en el proyecto y definir las siguientes variables:

- `SMTP_HOST`: Host del servidor SMTP.
- `SMTP_PORT`: Puerto del servidor SMTP.
- `SMTP_USER`: Usuario de tu cuenta SMTP.
- `SMTP_PASS`: Contraseña de tu cuenta SMTP.
- `SMTP_FROM`: Correo electrónico del remitente.

> ⚠️ Las variables SMTP solo son necesarias si descomentas y usas la configuración de nodemailer en el proyecto.

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

Payload CMS tiene una gran comunidad dispuesta a ayudarte en [Discord](https://discord.com/invite/
payload). También puedes abrir una discusión en [GitHub](https://github.com/payloadcms/payload/
discussions).
