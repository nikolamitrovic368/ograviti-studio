import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'CompletedDate',
      title: 'Completed Date',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainService',
      title: 'Main Service',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    {
      name: 'headerImages',
      type: 'array',
      title: 'Header Images',
      of: [
        {
          type: 'image',
        },
      ],
    },
    defineField({
      name: 'approachTitle',
      title: 'Approach Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'approachSubtitle',
      title: 'Approach Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundTitle',
      title: 'Background Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundSubtitle',
      title: 'Background Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'footerimage',
      title: 'Footer Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    {
      name: 'footerImages',
      type: 'array',
      title: 'Footer Images',
      of: [
        {
          type: 'image',
        },
      ],
    },
    defineField({
      name: 'exceptionalResultsTitle',
      title: 'Exceptional Results Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'exceptionalResultsSubtitle',
      title: 'Exceptional Results Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'relatedCaseStudies',
      title: 'Related Case Studies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'caseStudy'}}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})