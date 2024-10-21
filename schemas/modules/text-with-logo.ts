import { VscSymbolKeyword } from "react-icons/vsc";


import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'text-with-logo',
  title: 'Text With Logo',
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
    defineField({
      name: 'logoPosition',
      title: 'Logo Position',
      description: 'Left / Right',
      initialValue: false,
      type: 'boolean',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({title}) => ({
      title,
      subtitle: 'Text With Logo',
    }),
  },
})
