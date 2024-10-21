import {ImagesIcon} from '@sanity/icons'

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  type: 'object',
  icon: ImagesIcon,
  title: 'Gallery',
  fields: [
    {
      name: 'images',
      type: 'array',
      of: [
        defineField({
          name: 'image',
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        }),
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
  preview: {
    select: {
      images: 'images',
    },
    prepare: ({images}) => ({
      title: `${images.length ?? 0} images`,
      subtitle: 'Gallery',
    }),
  },
})
