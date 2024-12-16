import {defineArrayMember, defineField} from 'sanity'

export default defineField({
  name: 'modules',
  type: 'array',
  title: 'Modules',
  of: [
    defineArrayMember({
      name: 'heading-title',
      type: 'heading-title',
    }),
    defineArrayMember({
      name: 'branding',
      type: 'branding',
    }),
    defineArrayMember({
      name: 'journey-carousel',
      type: 'journey-carousel',
    }),
    defineArrayMember({
      name: 'case-study-list',
      type: 'case-study-list',
    }),
    defineArrayMember({
      name: 'testimonial-list',
      type: 'testimonial-list',
    }),
    defineArrayMember({
      name: 'team',
      type: 'team',
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
    defineArrayMember({
      name: 'contact-form',
      type: 'reference',
      to: {type: 'contact-form'},
    }),
    defineArrayMember({
      name: 'contact-us-cta',
      type: 'contact-us-cta',
    }),
    defineArrayMember({
      name: 'image-with-list',
      type: 'image-with-list',
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
        {
          name: 'promotte',
          title: 'Promote',
          of: ['contact-us-cta'],
        },
        {
          name: 'misc',
          title: 'Miscellaneous',
          of: ['heading-title', 'contact-form', 'image-with-list', 'simple-text', 'video'],
        },
      ],
      views: [
        {
          name: 'grid',
          previewImageUrl: (schemaTypeName) => `/static/preview/${schemaTypeName}.png`,
        },
        {name: 'list'},
      ],
    },
  },
})
