import path from 'path'
import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
// import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
// import nodemailer from 'nodemailer'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Translations (For Location —data—)
import { es } from '@payloadcms/translations/languages/es'

// Collections
import { Pages } from './collections/Pages'
import { Users } from './collections/Users'
import { Media } from './collections/Media'

// Globals
import { Menus } from './globals/Menus'

// Others
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Pages, Media, Users],
  globals: [Menus],
  i18n: {
    supportedLanguages: { es },
    fallbackLanguage: 'es',
  },
  localization: {
    locales: [
      {
        label: 'Español',
        code: 'es',
      },
      {
        label: 'English',
        code: 'en',
      },
    ],
    defaultLocale: 'es',
  },
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    s3Storage({
      collections: {
        media: {
          disableLocalStorage: true,
          generateFileURL: ({ filename }) => {
            return `${process.env.S3_BUCKET_DOMAIN}/${filename}`
          },
        },
      },
      bucket: process.env.S3_BUCKET as string,
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
        },
        region: process.env.S3_REGION,
        endpoint: process.env.S3_ENDPOINT,
        forcePathStyle: true,
      },
    }),
  ],
  // email: nodemailerAdapter({
  //   defaultFromAddress: process.env.DEFAULT_FROM_ADDRESS || '',
  //   defaultFromName: process.env.DEFAULT_FROM_NAME || '',
  //   transport: nodemailer.createTransport({
  //     host: process.env.SMTP_HOST,
  //     port: 587,
  //     auth: {
  //       user: process.env.SMTP_USER,
  //       pass: process.env.SMTP_PASS,
  //     },
  //   }),
  // }),
})
