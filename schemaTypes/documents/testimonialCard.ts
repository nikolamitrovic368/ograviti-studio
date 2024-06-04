import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonialCard',
  title: 'Testimonial Card',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rate',
      title: 'Rate',
      type: 'number',
      options: {
        list: [
          {title: '0', value: 0},
          {title: '1', value: 1},
          {title: '2', value: 2},
          {title: '3', value: 3},
          {title: '4', value: 4},
          {title: '5', value: 5},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      rows: 4,
      type: 'text',
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
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
