import {SearchIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'servicesPage',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    ...Array.from({length: 5}, (_, i) =>
      defineField({
        name: `service${i + 1}`,
        title: `Service ${i + 1}`,
        type: 'object',
        fields: [
          defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
          }),
          defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'text',
            rows: 4,
            validation: (Rule) => Rule.required(),
          }),
          defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: (Rule) => Rule.required(),
            options: {
              hotspot: true,
            },
          }),
        ],
      }),
    ),
    defineField({
      name: 'modules',
      type: 'modules',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
  ],
})
