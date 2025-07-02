import type { CollectionSlug, GlobalConfig } from 'payload'
import { isAdmin, isAdminOrEditor } from '@/access'

export const Menus: GlobalConfig = {
  slug: 'menus',
  access: {
    read: isAdminOrEditor,
    update: isAdmin,
  },
  versions: true,
  admin: {
    group: 'Ajustes',
  },
  label: 'Menús',
  fields: [
    {
      type: 'group',
      name: 'header',
      label: 'Cabecera',
      fields: [
        {
          type: 'array',
          name: 'menuItems',
          label: 'Items del menú',
          labels: {
            singular: 'Item',
            plural: 'Items',
          },
          fields: [
            {
              type: 'text',
              name: 'label',
              label: 'Texto',
              required: true,
            },
            {
              type: 'radio',
              name: 'linkType',
              label: 'Tipo de link',
              options: [
                {
                  label: 'Página',
                  value: 'page',
                },
                {
                  label: 'Ingresar manualmente',
                  value: 'url',
                },
                {
                  label: 'Link externo',
                  value: 'external',
                },
              ],
              defaultValue: 'page',
            },
            {
              name: 'link',
              label: 'Destino',
              type: 'relationship',
              relationTo: 'pages' as CollectionSlug,
              hasMany: false,
              // maxDepth: 0,
              admin: {
                allowCreate: false,
                allowEdit: false,
                condition: (data, siblingData) => siblingData?.linkType === 'page',
              },
            },
            {
              type: 'text',
              name: 'linkUrl',
              label: 'URL',
              admin: {
                condition: (data, siblingData) => siblingData?.linkType === 'url',
                className: 'field-custom-preppend',
              },
            },
            {
              type: 'text',
              name: 'externalLink',
              label: 'URL',
              admin: {
                condition: (data, siblingData) => siblingData?.linkType === 'external',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'footer',
      label: 'Pie de página',
      fields: [
        {
          type: 'row',
          admin: {
            className: 'three-columns-layout',
          },
          fields: [
            {
              type: 'array',
              name: 'menuItems_firstColumn',
              label: 'Primera columna',
              labels: {
                singular: 'Item',
                plural: 'Items',
              },
              fields: [
                {
                  type: 'text',
                  name: 'label',
                  label: 'Texto',
                  required: true,
                },
                {
                  type: 'radio',
                  name: 'linkType',
                  label: 'Tipo de link',
                  options: [
                    {
                      label: 'Página',
                      value: 'page',
                    },
                    {
                      label: 'Ingresar manualmente',
                      value: 'url',
                    },
                    {
                      label: 'Link externo',
                      value: 'external',
                    },
                  ],
                  defaultValue: 'page',
                },
                {
                  type: 'relationship',
                  name: 'link',
                  label: 'Destino',
                  relationTo: 'pages' as CollectionSlug,
                  hasMany: false,
                  // maxDepth: 0,
                  admin: {
                    allowCreate: false,
                    allowEdit: false,
                    condition: (data, siblingData) => siblingData?.linkType === 'page',
                  },
                },
                {
                  type: 'text',
                  name: 'linkUrl',
                  label: 'URL',
                  admin: {
                    condition: (data, siblingData) => siblingData?.linkType === 'url',
                    className: 'field-custom-preppend',
                  },
                },
                {
                  type: 'text',
                  name: 'externalLink',
                  label: 'URL',
                  admin: {
                    condition: (data, siblingData) => siblingData?.linkType === 'external',
                  },
                },
              ],
            },
            {
              type: 'array',
              name: 'menuItems_secondColumn',
              label: 'Segunda columna',
              labels: {
                singular: 'Item',
                plural: 'Items',
              },
              fields: [
                {
                  type: 'text',
                  name: 'label',
                  label: 'Texto',
                  required: true,
                },
                {
                  type: 'radio',
                  name: 'linkType',
                  label: 'Tipo de link',
                  options: [
                    {
                      label: 'Página',
                      value: 'page',
                    },
                    {
                      label: 'Ingresar manualmente',
                      value: 'url',
                    },
                    {
                      label: 'Link externo',
                      value: 'external',
                    },
                  ],
                  defaultValue: 'page',
                },
                {
                  name: 'link',
                  label: 'Destino',
                  type: 'relationship',
                  relationTo: 'pages' as CollectionSlug,
                  hasMany: false,
                  // maxDepth: 0,
                  admin: {
                    allowCreate: false,
                    allowEdit: false,
                    condition: (data, siblingData) => siblingData?.linkType === 'page',
                  },
                },
                {
                  type: 'text',
                  name: 'linkUrl',
                  label: 'URL',
                  admin: {
                    condition: (data, siblingData) => siblingData?.linkType === 'url',
                    className: 'field-custom-preppend',
                  },
                },
                {
                  type: 'text',
                  name: 'externalLink',
                  label: 'URL',
                  admin: {
                    condition: (data, siblingData) => siblingData?.linkType === 'external',
                  },
                },
              ],
            },
            {
              type: 'array',
              name: 'menuItems_thirdColumn',
              label: 'Tercera columna',
              labels: {
                singular: 'Item',
                plural: 'Items',
              },
              fields: [
                {
                  type: 'text',
                  name: 'label',
                  label: 'Texto',
                  required: true,
                },
                {
                  type: 'radio',
                  name: 'linkType',
                  label: 'Tipo de link',
                  options: [
                    {
                      label: 'Página',
                      value: 'page',
                    },
                    {
                      label: 'Ingresar manualmente',
                      value: 'url',
                    },
                    {
                      label: 'Link externo',
                      value: 'external',
                    },
                  ],
                  defaultValue: 'page',
                },
                {
                  type: 'relationship',
                  name: 'link',
                  label: 'Destino',
                  relationTo: 'pages' as CollectionSlug,
                  hasMany: false,
                  // maxDepth: 0,
                  admin: {
                    allowCreate: false,
                    allowEdit: false,
                    condition: (data, siblingData) => siblingData?.linkType === 'page',
                  },
                },
                {
                  type: 'text',
                  name: 'linkUrl',
                  label: 'URL',
                  admin: {
                    condition: (data, siblingData) => siblingData?.linkType === 'url',
                    className: 'field-custom-preppend',
                  },
                },
                {
                  type: 'text',
                  name: 'externalLink',
                  label: 'URL',
                  admin: {
                    condition: (data, siblingData) => siblingData?.linkType === 'external',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
