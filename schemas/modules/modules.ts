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
      name: 'companies',
      type: 'reference',
      to: {type: 'companies'},
    }),
    defineArrayMember({
      name: 'gallery',
      type: 'gallery',
    }),
    defineArrayMember({
      name: 'text-with-logo',
      type: 'text-with-logo',
    }),
    defineArrayMember({
      name: 'simple-text',
      type: 'simple-text',
    }),
    defineArrayMember({
      name: 'video',
      type: 'video',
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
