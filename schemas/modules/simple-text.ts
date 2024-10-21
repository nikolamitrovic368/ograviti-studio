import { VscSymbolKeyword } from "react-icons/vsc";


import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'simple-text',
  title: 'Simple Text',
  type: 'object',
  icon: VscSymbolKeyword,
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
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({title}) => ({
      title,
      subtitle: 'Simple Text',
    }),
  },
})
