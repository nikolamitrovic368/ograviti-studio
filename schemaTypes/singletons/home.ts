import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  groups: [
    {name: 'branding', title: 'Branding'},
    {name: 'journey', title: 'Journey'},
    {name: 'caseStudy', title: 'Case Study'},
    {name: 'testimonial', title: 'Testimonial'},
    {name: 'companies', title: 'Companies'},
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
          rows:4,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'dataAnalysisSubtitle',
          title: 'Data Analysis Subtitle',
          type: 'text',
          rows:4,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'uiuxSubtitle',
          title: 'UI & UX Subtitle',
          type: 'text',
          rows:4,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'developmentSubtitle',
          title: 'Development Subtitle',
          type: 'text',
          rows:4,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'digitalMarketingSubtitle',
          title: 'Digital Marketing Subtitle',
          rows:4,
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
          rows:4,
          validation: (Rule) => Rule.required(),
        }),
        ...[...new Array(4)].map((_, key) =>
          defineField({
            name: `step${key + 1}`,
            title: `Step${key + 1}`,
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
                rows:4,
                validation: (Rule) => Rule.required(),
              }),
              defineField({
                name: 'image',
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
      name: 'caseStudy',
      title: 'Case Study',
      type: 'object',
      group: 'caseStudy',
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
          rows:4,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'relatedBlogs',
          title: 'Related Blogs',
          type: 'array',
          of: [{type: 'reference', to: {type: 'blog'}}],
        }),
      ],
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      group: 'testimonial',
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
          rows:4,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'testimonialCards',
          title: 'Testimonial Cards',
          type: 'array',
          of: [{type: 'reference', to: {type: 'testimonialCard'}}],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
