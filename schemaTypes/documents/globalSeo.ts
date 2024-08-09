import {TrendUpwardIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'globalSeo',
  title: 'Global SEO',
  type: 'document',
  icon: TrendUpwardIcon,
  fields: [
    defineField({
      name: 'globalSeoTitle',
      description: 'This text is added to the title tag on all pages. Maximum 70 characters.',
      title: 'Global Title',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(70).warning(`A title shouldn't be more than 70 characters.`),
    }),
    defineField({
      name: 'globalSeoDescription',
      description:
        'This is meta the description on all pages where it is not defined. Maximum 160 characters.',
      title: 'Global Description',
      type: 'text',
      validation: (Rule) =>
        Rule.required().max(160).warning(`A title shouldn't be more than 160 characters.`),
    }),
    defineField({
      name: 'globalKeywords',
      title: 'Global Keywords',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'globalSeoImage',
      description:
        'This is the meta image presented in search and social on all pages where it is not defined.',
      title: 'Global Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
  ],
})
