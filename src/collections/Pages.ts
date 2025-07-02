import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { isAdmin, isAdminOrEditor, isAdminOrEditorIfPublished } from '@/access'
import { SlugField } from '@/fields/slug'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Página',
    plural: 'Páginas',
  },
  access: {
    create: isAdmin,
    read: isAdminOrEditorIfPublished,
    update: isAdminOrEditor,
    delete: isAdmin,
  },
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título',
      required: true,
      localized: true,
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Contenido',
      editor: lexicalEditor({}),
      localized: true,
    },
    SlugField('title'),
  ],
}
