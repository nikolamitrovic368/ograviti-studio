import {defineArrayMember, defineField} from 'sanity'

export default defineField({
  name: 'modules',
  type: 'array',
  title: 'Modules',
  of: [
    defineArrayMember({
      name: 'branding',
      type: 'branding',
    }),
    defineArrayMember({
      name: 'case-study-list',
      type: 'case-study-list',
    }),
    defineArrayMember({
      name: 'journey-carousel',
      type: 'journey-carousel',
    }),
    defineArrayMember({
      name: 'testimonial-list',
      type: 'testimonial-list',
    }),
    defineArrayMember({
      name: 'Companies',
      type: 'reference',
      to: {type: 'companies'},
    }),
  ],
  options: {
    layout: 'list',
    insertMenu: {
      filter: true,
      groups: [
        {
          name: 'landing',
          title: 'Landing Page',
          of: ['branding', 'case-study-list', 'testimonial-list', 'journey-carousel'],
        },
      ],
      views: [
        {
          name: 'grid',
          previewImageUrl: (schemaTypeName) => `/static/preview-${schemaTypeName}.png`,
        },
        {name: 'list'},
      ],
    },
  },
})