import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
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
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
        defineArrayMember({
          type: 'object',
          name: 'multiPartImageBlock',
          title: 'Multi-Part Image Block',
          fields: [
            {
              name: 'multiPartImage',
              type: 'multiPartImage',
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'relatedBlogs',
      title: 'Related Blogs',
      type: 'array',
      of: [{type: 'reference', to: {type: 'blog'}}],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
