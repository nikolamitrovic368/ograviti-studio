import {defineField, defineType, KeyedObject} from 'sanity'
import {VscInspect} from 'react-icons/vsc'

export default defineType({
  name: 'contact-us-cta',
  title: 'Contact Us CTA',
  icon: VscInspect,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Us CTA',
      }
    },
  },
})
