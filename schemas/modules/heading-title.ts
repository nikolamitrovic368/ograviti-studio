import {defineField, defineType} from 'sanity'
import {VscInspect} from 'react-icons/vsc'

export default defineType({
  name: 'heading-title',
  title: 'Heading title',
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
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({title}) => {
      return {
        title,
        subtitle: 'Heading title',
      }
    },
  },
})
