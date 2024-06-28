import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'careersPage',
  title: 'Careers Page',
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
    defineField({
      name: 'careers',
      title: 'Careers',
      type: 'array',
      of: [{type: 'reference', to: {type: 'career'}}],
    }),
  ],
})
