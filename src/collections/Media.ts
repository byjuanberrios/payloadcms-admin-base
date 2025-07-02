import { isAdminOrEditor, isAdminOrEditorIfPublished } from '@/access'
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Imagen',
    plural: 'Imágenes',
  },
  access: {
    create: isAdminOrEditor,
    read: isAdminOrEditorIfPublished,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  admin: {
    useAsTitle: 'alt',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Descripción de la imagen',
      required: true,
    },
  ],
  upload: true,
}
