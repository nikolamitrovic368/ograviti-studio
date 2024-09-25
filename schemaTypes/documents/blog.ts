import {SearchIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'
import {isUniqueOtherThanLanguage} from '../../utils/is-unique-other-than-language'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  groups: [{name: 'seo', title: 'SEO', icon: SearchIcon}],
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
      title: 'Hero Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'displayHeroImage',
      title: 'Display Hero Image in Blog Detail Page',
      type: 'boolean',
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
        isUnique: isUniqueOtherThanLanguage,
      },
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
