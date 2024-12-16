import {defineField, defineType} from 'sanity'
import {VscInspect} from 'react-icons/vsc'

export default defineType({
  name: 'testimonial-list',
  title: 'Testimonial List',
  icon: VscInspect,
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'testimonialCards',
      title: 'Testimonial Cards',
      type: 'array',
      of: [{type: 'reference', to: {type: 'testimonialCard'}}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({title}) => ({
      title: title || 'Testimonial List',
      subtitle: 'Testimonial List',
    }),
  },
})
