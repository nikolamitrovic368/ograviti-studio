import { SearchIcon } from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonialPage',
  title: 'Testimonial Page',
  type: 'document',
  groups: [{name: 'seo', title: 'SEO', icon: SearchIcon}],
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
      name: 'testimonialCards',
      title: 'Testimonial Cards',
      type: 'array',
      of: [{type: 'reference', to: {type: 'testimonialCard'}}],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
})
