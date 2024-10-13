import {defineField, defineType} from 'sanity'
import {AiFillBulb} from 'react-icons/ai'

export default defineType({
  name: 'branding',
  title: 'Branding',
  icon: AiFillBulb,
  type: 'object',
  fields: [
    defineField({
      name: 'brandingSubtitle',
      title: 'Branding Subtitle',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dataAnalysisSubtitle',
      title: 'Data Analysis Subtitle',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'uiuxSubtitle',
      title: 'UI & UX Subtitle',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'developmentSubtitle',
      title: 'Development Subtitle',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'digitalMarketingSubtitle',
      title: 'Digital Marketing Subtitle',
      rows: 4,
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Branding',
    }),
  },
})
