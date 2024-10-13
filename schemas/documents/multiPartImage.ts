// schemas/multiPartImage.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'multiPartImage',
  title: 'Multi-Part Image',
  type: 'object',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
  ],
})
