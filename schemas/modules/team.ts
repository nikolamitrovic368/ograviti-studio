import {defineField, defineType} from 'sanity'
import {VscInspect} from 'react-icons/vsc'

export default defineType({
  name: 'team',
  title: 'Team',
  icon: VscInspect,
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
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [{type: 'reference', to: {type: 'teamMember'}}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({title}) => ({
      title: title,
      subtitle: 'Team',
    }),
  },
})
