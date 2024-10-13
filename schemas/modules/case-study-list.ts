import {defineField, defineType} from 'sanity'
import {VscInspect} from 'react-icons/vsc'

export default defineType({
  name: 'case-study-list',
  title: 'Case Study list',
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
      name: 'caseStudies',
      title: 'Case Studies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'caseStudy'}}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({title}) => ({
      title: title || 'Case Study List',
      subtitle: 'Case Study List',
    }),
  },
})
