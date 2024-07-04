import {SearchIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    {name: 'branding', title: 'Branding'},
    {name: 'journey', title: 'Journey'},
    {name: 'caseStudies', title: 'Case Study'},
    {name: 'seo', title: 'SEO', icon: SearchIcon},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'brandings',
      title: 'Branding',
      type: 'object',
      group: 'branding',
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
    }),
    defineField({
      name: 'journey',
      title: 'Journey',
      type: 'object',
      group: 'journey',
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
        ...[...new Array(4)].map((_, key) =>
          defineField({
            name: `step${key + 1}`,
            title: `Step${key + 1}`,
            type: 'object',
            fields: [
              defineField({
                name: 'name',
                title: 'Name',
                type: 'string',
                validation: (Rule) => Rule.required(),
              }),
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
                name: 'media',
                title: 'Image',
                type: 'object',
                fields: [
                  defineField({
                    name: 'image',
                    title: 'Image',
                    type: 'image',
                    options: {
                      hotspot: true,
                    },
                  }),
                  defineField({
                    title: 'Position',
                    name: 'position',
                    type: 'string',
                    initialValue: 'top',
                    options: {
                      list: [
                        {title: 'Top', value: 'top'},
                        {title: 'Bottom', value: 'bottom'},
                        {title: 'Left', value: 'left'},
                      ],
                    },
                  }),
                ],
              }),
            ],
          }),
        ),
      ],
    }),
    defineField({
      name: 'caseStudies',
      title: 'Case Study',
      type: 'object',
      group: 'caseStudies',
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
          name: 'relatedCaseStudies',
          title: 'Related Case Studies',
          type: 'array',
          of: [{type: 'reference', to: {type: 'caseStudy'}}],
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
})
